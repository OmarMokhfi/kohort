import { RouterBuilder, UnauthorizedException } from "next-api-handler";

import prisma from "@/lib/Prisma";
import { getToken } from "next-auth/jwt";

const router = new RouterBuilder();

router.get(async (req, res) => {
  const token = await getToken({ req });
  if (!token) throw new UnauthorizedException("Unauthorized");
  const venues = await prisma.venue.findMany();
  res.status(200).json(venues);
});

router.post(async (req, res) => {
  const {
    venue_name,
    venue_street,
    venue_city,
    venue_country,
    venue_state,
    venue_postal_code,
    capacity,
  } = req.body;

  let address = `${venue_street} ${venue_city}, ${venue_postal_code} ${venue_state}, ${venue_country}`;
  const token = await getToken({ req });
  if (!token) throw new UnauthorizedException("Unauthorized");
  try {
    const venue = await prisma.venue.create({
      data: {
        name: venue_name,
        address: address,
        latitude: "35.2094937",
        longitude: "-0.6334864",
        capacity: capacity,
      },
    });
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router.build();
