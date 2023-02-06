import prisma, { PrismaError } from "@/lib/Prisma";
import { decodeToken } from "@/services/token.service";
import { ResponseType } from "@/types/Requests";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  try {
    let { token } = req.body;
    let decoded: any = await decodeToken(token);
    const user = await prisma.user.update({
      where: {
        email: decoded.email,
      },
      data: {
        verified: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Verified Successfully",
      data: user,
    });
  } catch (e) {
    let error = PrismaError(e);
    res.status(500).json(error);
  }
}
