import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const PrismaError = (e: any) => {
  let message = "server_error";

  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    switch (e.code) {
      case "P2002":
        message = "unique_error";
        break;
      default:
        message = "server_error";
        break;
    }
  }
  return {
    success: false,
    message: message,
  };
};

export default prisma;
