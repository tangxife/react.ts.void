import React from "react"
import { Box, HStack, VStack } from "@chakra-ui/react"

import Sidebar from "src/components/Sidebar"
import Header from "src/components/Header"

const AppLayoutUser: React.FC = () => {
  return (
    <>
      <HStack>
        <Sidebar />
        <VStack>
          <Header />
          <Box>main</Box>
        </VStack>
      </HStack>
    </>
  )
}

export default AppLayoutUser
