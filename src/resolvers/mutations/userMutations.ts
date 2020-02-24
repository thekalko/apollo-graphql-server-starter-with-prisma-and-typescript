import { prisma, User } from "prisma";
import { ACTIVE } from "../../types/status";

interface Args  {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default {
  createUser: async (_: void, args: Args, ctx: void): Promise<User> => {
    return await prisma.createUser({
      email: args.email,
      password: args.password,
      firstName: args.firstName,
      lastName: args.lastName,
      status: ACTIVE
    });
  }
};