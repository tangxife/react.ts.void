import React, { useState } from "react"
import { Box, Flex, VStack } from "@chakra-ui/react"

import SideBar from "src/components/SideBar"
import Header from "src/components/Header"

const AppLayoutUser: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("home")

  return (
    <Flex>
      <SideBar selectedTab={selectedTab} onSelect={setSelectedTab} />
      <VStack mt="0px" justify="start">
        <Header title="候補者一覧" userName="エッグフォワード中途採用担当者様" />
        <Box bg="blue">main</Box>
      </VStack>
    </Flex>
  )
}

export default AppLayoutUser
