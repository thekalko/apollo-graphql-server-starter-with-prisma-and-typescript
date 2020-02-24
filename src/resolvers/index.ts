import { IResolvers } from "graphql-tools";

//queries
import userQueries from "./queries/userQueries";

//mutations
import userMutations from "./mutations/userMutations";

//subscription
import userSubscription from "./subscriptions/userSubscriptions";


export const resolverMap: IResolvers = {
  Mutation: {
    ...userMutations
  },
  Query: {
    ...userQueries
  },
  Subscription: {
    ...userSubscription
  }
};