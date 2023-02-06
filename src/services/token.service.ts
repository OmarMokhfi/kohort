import jwt from "jsonwebtoken";

export const generateToken = (data: {
  email: string;
  first_name: string;
  last_name: string;
}) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign(data, process.env.NEXTAUTH_SECRET || "");
    resolve(token);
  });
};

export const decodeToken = (token: string) => {
  return new Promise((resolve, reject) => {
    let decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET || "");
    resolve(decoded);
  });
};
