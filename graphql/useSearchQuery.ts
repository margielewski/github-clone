import { SearchQuery, SearchQueryVariables } from 'types/graphql/types';
import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query Search($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      edges {
        node {
          ...Repository
        }
      }
    }
  }

  fragment Repository on Repository {
    id
    name
    forkCount
    isPrivate
    owner {
      login
      avatarUrl
    }
    stargazers {
      totalCount
    }
    watchers {
      totalCount
    }
  }
`;

export const useSearchQuery = () => {
  return useLazyQuery<SearchQuery, SearchQueryVariables>(SEARCH_QUERY, {
    onError: (error) => console.log('ON ERROR :: ', error),
  });
};
