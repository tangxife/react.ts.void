import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Span from "./components/Span"
import ExchangeRates from "./pages/ExchangeRates/ExchangeRates"

import { useApollo } from "./hooks/Apollo/useApollo"

function App() {
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <Button colorScheme="blue">ChakraButton</Button>
          <Span textStyle="h1">test text</Span>
          <Span textStyle="h2">test text</Span>
          <Span textStyle="h3">test text</Span>
          <Span textStyle="h4">test text</Span>
          <Span textStyle="h5">test text</Span>
          <Span textStyle="h6">test text</Span>
          <Span textStyle="h6">test text</Span>
          <Span textStyle="md">test text</Span>
          <ExchangeRates />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
