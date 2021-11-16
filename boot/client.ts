import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL });

const withToken = setContext(async () => {
  const session = await getSession();

  return { accessToken: session?.accessToken };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { accessToken } = operation.getContext();

  operation.setContext(() => ({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([withToken, authMiddleware.concat(httpLink)]),
});

export default client;
