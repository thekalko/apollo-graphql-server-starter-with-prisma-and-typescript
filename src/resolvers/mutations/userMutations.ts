import { ACTIVE } from "../../types/status";
import { prisma } from '../../../prisma/prisma';
import { User } from "@prisma/client";

interface Args  {
  name: string;
  email: string;
}

export default {
  createUser: async (_: void, args: Args, ctx: void): Promise<User> => {
    return await prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
      }
    })
  }
};