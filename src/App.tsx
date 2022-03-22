import React from "react"
import { ChakraProvider, Button } from "@chakra-ui/react"
import Span from "./components/Span"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Button colorScheme="blue">ChakraButton</Button>
        <Span textTheme="heading1">test text</Span>
      </div>
    </ChakraProvider>
  )
}

export default App
