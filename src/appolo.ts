import { ApolloClient, InMemoryCache } from "@apollo/client";

const GITHUB_GRAPHQL_API_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_TOKEN =
  "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"; // Replace this with your own token

export const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
