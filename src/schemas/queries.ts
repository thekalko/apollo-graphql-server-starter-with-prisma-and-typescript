import  gql  from "graphql-tag";

const typeQuery = gql`
  type Query {
    users: [User]
  }
`;

export default typeQuery;