import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

export const useApollo = (): {
  client: ApolloClient<NormalizedCacheObject>
} => {
  const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io", // TODO server uri
    cache: new InMemoryCache()
  })

  return { client }
}
