import  gql  from "graphql-tag";

const typeSubscription = gql`
  type Subscription {
    newUser: User!
  }
`;

export default typeSubscription;