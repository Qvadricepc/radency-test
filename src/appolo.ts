import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GITHUB_ACCESS_TOKEN } from "./const.ts";

const GITHUB_GRAPHQL_API_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_TOKEN = GITHUB_ACCESS_TOKEN;

export const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
