import { prisma, User } from "prisma";

export default {
  users: async (_: void, args: void, ctx: void): Promise<User[]> => {
    return await prisma.users();
  }
};