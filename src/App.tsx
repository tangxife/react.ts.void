import React from "react"
import { ChakraProvider, Button } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Button colorScheme="blue" onClick={() => console.log("click button")}>
          Button
        </Button>
      </div>
    </ChakraProvider>
  )
}

export default App
