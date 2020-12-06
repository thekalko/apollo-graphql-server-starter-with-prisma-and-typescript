import { User } from "@prisma/client";
import { GraphQLExtension } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export interface ApolloContext {
  _extensionStack: GraphQLExtension;
  ctx: ExpressContext;
  user?: User;
}