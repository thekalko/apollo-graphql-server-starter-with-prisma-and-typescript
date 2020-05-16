import  gql  from "graphql-tag";

const typeMutation = gql`
  type Mutation {
    createUser(name: String!, email: String!,): User! 
  }
`;

export default typeMutation;