import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  NormalizedCacheObject
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

export const useApollo = (): {
  client: ApolloClient<NormalizedCacheObject>
} => {
  const httpLink = createHttpLink({
    // todo
    uri: "/graphql"
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists todo
    const token = localStorage.getItem("token")

    // return the headers to the context so httpLink can read them todo
    return {
      // todo
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    }
  })

  const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache()
  })

  return { client }
}
