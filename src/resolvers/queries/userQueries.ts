import { prisma } from "prisma";
import { User } from "@prisma/client";
import { ApolloContext } from "src/types/ApolloContext";


export default {
  users: async (_: void, args: void, ctx: ApolloContext): Promise<Array<User>> => {
    return await prisma.user.findMany();
  }
};