import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Span from "src/components/Span"
import ExchangeRates from "src/pages/ExchangeRates/ExchangeRates"
import { useTranslation } from "react-i18next";

import { useApollo } from "src/hooks/Apollo/useApollo"

function App() {
  const {t} = useTranslation()
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <Button colorScheme="blue">ChakraButton</Button>
          <Span textTheme="heading1">test text {t("language")}</Span>
          <ExchangeRates />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
