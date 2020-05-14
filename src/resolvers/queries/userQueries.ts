import { prisma } from "prisma";
import { User } from "@prisma/client";


export default {
  users: async (_: void, args: void, ctx: void): Promise<Array<User>> => {
    return await prisma.user.findMany();
  }
};