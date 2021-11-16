import { gql, useQuery } from '@apollo/client';
import { ViewerQuery, ViewerQueryVariables } from 'types/graphql/types';

const GET_ME_QUERY = gql`
  query Viewer {
    viewer {
      login
    }
  }
`;

export const useUserQuery = () => {
  return useQuery<ViewerQuery, ViewerQueryVariables>(GET_ME_QUERY, {
    onError: (error) => console.log('ON ERROR :: ', error),
  });
};
