import React, { useState } from "react"
import { Box, Flex, VStack } from "@chakra-ui/react"
import SideBar from "src/components/SideBar"
import Header from "src/components/Header"

const AppLayoutUser: React.FC = () => {
  const userName = "エッグフォワード中途採用担当者様"
  const menuItems = [
    { key: "logout", menuTitle: "ログアウト" },
    { key: "other", menuTitle: "その他" }
  ]
  const [selectedTab, setSelectedTab] = useState<string>("home")

  const handleMenuSelect = (key: string) => {
    console.log("select menu: ", key)
  }

  const haneleTabSelect = (key: string) => {
    setSelectedTab(key)
    console.log("select tab: ", key)
  }

  return (
    <Flex>
      <SideBar selectedTab={selectedTab} onTabSelect={haneleTabSelect} />
      <VStack mt="0px" justify="start">
        <Header pageName="候補者一覧" userName={userName} menuItems={menuItems} onMenuSelect={handleMenuSelect} />
        <Box bg="blue">main</Box>
      </VStack>
    </Flex>
  )
}

export default AppLayoutUser
