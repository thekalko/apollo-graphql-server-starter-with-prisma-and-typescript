import  gql  from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }
`;

export default typeDefs;