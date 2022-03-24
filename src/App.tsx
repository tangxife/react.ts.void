import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Text from "./components/Text"
import theme from "./theme/theme"
import { useTranslation } from "react-i18next"

import ExchangeRates from "src/pages/ExchangeRates/ExchangeRates"
import { useApollo } from "src/hooks/Apollo/useApollo"

function App() {
  const { t } = useTranslation()
  const { client } = useApollo()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <Button colorScheme="blue">ChakraButton</Button>
          <Text fontStyle="h1" fontColor={theme.Color.Error.error} as="span">
            test text
          </Text>
          <Text fontStyle="h2" fontColor={theme.Color.Error.error}>
            test text
          </Text>
          <Text fontStyle="h3" fontColor={theme.Color.Error.error} as="span">
            test text
          </Text>
          <Text fontStyle="h4" fontColor={theme.Color.Error.error} as="p">
            test text
          </Text>
          <Text fontStyle="h5" fontColor={theme.Color.Text.text02} as="p">
            test text
          </Text>
          <Text fontStyle="h6" fontColor={theme.Color.Text.text02} as="span">
            test text
          </Text>
          <Text fontStyle="h6" fontColor={theme.Color.Text.text02} as="span">
            test text
          </Text>
          <Text fontStyle="md" fontColor={theme.Color.Text.text02} as="span">
            test text
          </Text>
          <Text fontStyle="h1">test text {t("language")}</Text>
          <ExchangeRates />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
