import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import RoutesView from "src/pages/RoutesView"

import { useApollo } from "src/hooks/Apollo/useApollo"

function App() {
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <RoutesView />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
