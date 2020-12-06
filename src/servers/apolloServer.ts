
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import {resolverMap} from "../resolvers";
import { Express } from "express";
import typeDefs from "../schemas";

export default {
  createApolloServer: async () => {
    return new ApolloServer({
      schema: makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolverMap,
        // resolverValidationOptions: {
        //   requireResolversForResolveType: false,
        // },
      }),
      context: async ctx => {
        if (ctx && ctx.connection) {
          return ctx.connection.context;
        }

        //resolve user 
        //const user = authTheUser(req.headers.authorization || "");
        const user = {
          id: "....",
          email: "exampleuser@gmail.com",
          firstName: "Example",
          lastName: "User"
        };

        return {
          ctx,
          user
        };
      },
      formatResponse: (resData, { context }) => {
        //format response
        return resData;
      },
      formatError: err => {
        //format error
        return err;
      },
      subscriptions: {
        path: process.env.APOLLO_SUBSCRIPTION_PATH,
        onConnect: connectionParams => {
          //Subscription socket params
        },
      },
      tracing: false,
      cacheControl: false,
      debug: false,
      introspection: true,
      playground: true,
    });
  },
  applyApolloOnExpress: (app: Express, server: ApolloServer) => {
    server.applyMiddleware({ app });
  },
};
