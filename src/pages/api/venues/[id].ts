import prisma from "@/lib/Prisma";
import {
  NotFoundException,
  RouterBuilder,
  UnauthorizedException,
} from "next-api-handler";
import { getToken } from "next-auth/jwt";

const router = new RouterBuilder();

router.get(async (req, res) => {
  const token = await getToken({ req });
  if (!token) throw new UnauthorizedException("Unauthorized");
  try {
    const venue = await prisma.venue.findFirst({
      where: {
        id: req.query.id as string,
      },
    });
    res.status(200).json(venue);
  } catch (error) {
    throw new NotFoundException("Venue not found");
  }
});

export default router.build();
