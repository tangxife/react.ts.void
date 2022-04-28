import { ApolloClient, InMemoryCache, createHttpLink, from, NormalizedCacheObject } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"
import { CredentialFragment } from "src/apollo/generated/graphql"
// import apiErrorsVar, { ApiErrorType } from "src/apollo/cache/apiErrors"; todo

import { Key, getItem } from "src/utils/localstorages"

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
})

const authLink = setContext((_, { headers }) => {
  const credential = getItem<CredentialFragment>(Key.credentail)

  if (!credential) return { headers }

  console.log("credential: ", credential)

  return {
    headers: {
      ...headers,
      uid: credential.uid,
      "access-token": credential.accessToken,
      client: credential.client
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log("apollo error:", graphQLErrors, networkError)
})

export const useApollo = (): {
  client: ApolloClient<NormalizedCacheObject>
} => {
  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache()
  })

  return { client }
}
