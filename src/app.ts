import dotenv from "dotenv";
dotenv.config();

import "module-alias/register";

import http from "http";
import {expressServer, apolloServer} from "./servers";
apolloServer.createApolloServer().then(server => {
  const app = expressServer.createExpressServer();
  apolloServer.applyApolloOnExpress(app, server);
  
  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);
  httpServer.listen({ port: process.env.PORT || process.env.APP_PORT }, () => {
    //subscriptionServerRegister(server);
    if (process.env.NODE_ENV !== "production") {
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT || process.env.APP_PORT}${server.graphqlPath}`);
      console.log(
        `🚀 Subscriptions ready at ws://localhost:${process.env.PORT || process.env.APP_PORT}${server.subscriptionsPath}`,
      );
    }
  });
});






