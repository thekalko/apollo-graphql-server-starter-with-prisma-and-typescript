import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';

import { resolverMap } from '../src/resolvers';
import typeDefs from '../src/schemas';
import { makeExecutableSchema } from 'graphql-tools';

const createTestServer = () => {
  return createTestClient(new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: typeDefs,
      resolvers: resolverMap,
    }),
    tracing: false,
    cacheControl: false,
    debug: true,
    introspection: true,
    playground: true,
  }));
}

describe('user tests', () => {
  it('fetch users', async () => {

    const {query} = createTestServer();
  
    const USERS_QUERY = `query { 
      users { 
        email
      }
    }`;
  
    const res = await query({ query: USERS_QUERY});
    expect(res).toMatchSnapshot();
  });
})

