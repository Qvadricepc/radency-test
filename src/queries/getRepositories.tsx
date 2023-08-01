import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchRepositories($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository {
          id
          name
          url
        }
      }
    }
  }
`;
