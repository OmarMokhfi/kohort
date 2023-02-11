// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/Prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await prisma.user.findFirst({
    where: {
      email: "ob.mokhfi@gmail.com",
    },
    include: {
      groups: true,
    },
  });

  res.status(200).json({ data: user });
}
