import { prisma, UserSubscriptionPayloadSubscription } from "prisma";
import { ACTIVE } from "../../types/status";

interface Args  {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default {
  newUser: {
    subscribe: async (_: void, args: Args, ctx: void): Promise<AsyncIterator<UserSubscriptionPayloadSubscription>>=> {
      return await prisma.$subscribe.user({
        mutation_in: ["CREATED"],
        node: {
          status: ACTIVE
        },
      })
      .node()
      .$fragment("{ id email }");
    },
    resolve: (payload: void) => {
      return payload;
    },
  }
};