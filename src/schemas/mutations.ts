import  gql  from "graphql-tag";

const typeMutation = gql`
  type Mutation {
    createUser(email: String!,  password: String!, firstName: String!, lastName: String!,): User! 
  }
`;

export default typeMutation;