import prisma, { PrismaError } from "@/lib/Prisma";
import { hashPassword } from "@/services/password.service";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    let { email, password, first_name, last_name, provider } = req.body;
    password = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password,
        first_name,
        last_name,
        provider,
      },
    });

    res.status(200).json({
      success: true,
      message: "Created successfully",
      data: user,
    });
  } catch (e) {
    let error = PrismaError(e);
    res.status(500).json(error);
  }
}
