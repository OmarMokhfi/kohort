import { sendAccountVerificationEmail } from "@/api/contact";
import prisma, { PrismaError } from "@/lib/Prisma";
import { hashPassword } from "@/services/password.service";
import { generateToken } from "@/services/token.service";
import { ResponseType } from "@/types/Requests";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
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

    generateToken({ email, first_name, last_name }).then((token) => {
      sendAccountVerificationEmail(first_name, email, token);
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
