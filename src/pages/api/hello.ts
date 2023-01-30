// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

const token =
  "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..YG6049yPqbQ9MIQ9.7Kf1FY01khYBP0kTERxJXPclqPR6mf2M29MKIY2dSd1fntRq7SuhrleVO6FrnOR6u4vSINJx5-9fWLBesZQnTPbsD6wUolZfvFMkwBkS4cPa-7nqsZBpFU42uBnX2sjDQapZ4ouU1RIng3uRDYV1lm79NGpv5f2i0SlsjyqJAf0b6yOdpUlSYReCc6kJrP_TKVfZEjtWE0VEm6yzpnIJ9Tc.PzB0B7IUaIBiTt4mVHIpCA";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  jwt.verify(token, process.env.NEXTAUTH_SECRET || "", function (err, decoded) {
    res.status(200).json({ data: decoded });
  });
}
