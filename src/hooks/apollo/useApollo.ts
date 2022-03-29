import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

export const useApollo = (): {
  client: ApolloClient<NormalizedCacheObject>
} => {
  const client = new ApolloClient({
    // uri: "http://localhost:4000",
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache()
  })

  return { client }
}
