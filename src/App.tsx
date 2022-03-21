import React from "react"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Text from "./components/Text"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Text textTheme="heading1" />
      </div>
    </ChakraProvider>
  )
}

export default App
