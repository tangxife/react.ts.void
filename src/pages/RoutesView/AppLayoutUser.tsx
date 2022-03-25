import React, { useState } from "react"
import { Box, HStack, VStack } from "@chakra-ui/react"

import SideBar from "src/components/SideBar"
import Header from "src/components/Header"

const AppLayoutUser: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("home")

  return (
    <>
      <HStack>
        <SideBar selectedTab={selectedTab} onSelect={setSelectedTab} />
        <VStack>
          <Header />
          <Box>main</Box>
        </VStack>
      </HStack>
    </>
  )
}

export default AppLayoutUser
