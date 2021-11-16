import { RepositoryQuery, RepositoryQueryVariables } from 'types/graphql/types';
import { gql, useQuery } from '@apollo/client';

export const REPOSITORY_QUERY = gql`
  query Repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryDetails
    }
  }

  fragment RepositoryDetails on Repository {
    createdAt
    description
    forkCount
    sshUrl
    name
    owner {
      login
      avatarUrl
    }
    defaultBranchRef {
      target {
        ...Commit
      }
    }
  }
  fragment Commit on Commit {
    id
    history(first: 10) {
      edges {
        node {
          author {
            name
            avatarUrl
          }
          message
          messageHeadline
          authoredDate
          id
        }
      }
    }
  }
`;

export const useRepositoryQuery = ({
  name,
  owner,
}: RepositoryQueryVariables) => {
  return useQuery<RepositoryQuery, RepositoryQueryVariables>(REPOSITORY_QUERY, {
    variables: { name, owner },
    onError: (error) => console.log('ON ERROR :: ', error),
  });
};
