import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Text from "src/components/Text"
import ExchangeRates from "src/pages/ExchangeRates/ExchangeRates"
import { useTranslation } from "react-i18next"

import { useApollo } from "src/hooks/Apollo/useApollo"

function App() {
  const { t } = useTranslation()
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <Button colorScheme="blue">ChakraButton</Button>
          <Text textStyle="h1">test text {t("language")}</Text>
          <Text textStyle="h2">test text</Text>
          <Text textStyle="h3">test text</Text>
          <Text textStyle="h4">test text</Text>
          <Text textStyle="h5">test text</Text>
          <Text textStyle="h6">test text</Text>
          <Text textStyle="h6">test text</Text>
          <Text textStyle="md">test text</Text>
          <ExchangeRates />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
