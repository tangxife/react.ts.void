import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

export const useApollo = (): {
  client: ApolloClient<NormalizedCacheObject>
} => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache()
  })

  return { client }
}
