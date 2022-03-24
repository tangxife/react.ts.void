import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"

import { useApollo } from "src/hooks/Apollo/useApollo"

function App() {
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">Hello, React!</div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
