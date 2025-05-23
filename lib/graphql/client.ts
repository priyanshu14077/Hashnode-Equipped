import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.HASHNODE_API_URL || 'https://gql.hashnode.com';

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: process.env.HASHNODE_TOKEN || '',
  },
});