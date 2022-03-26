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
  const [pageName, setPageName] = useState<string>("")
  const [selectedTab, setSelectedTab] = useState<string>("home")

  const handleMenuSelect = (key: string) => {
    console.log("select menu: ", key)
  }

  const haneleTabSelect = (key: string) => {
    const pages = [
      { key: "home", pageName: "" },
      { key: "candidates", pageName: "候補者一覧" },
      { key: "questions", pageName: "質問テンプレート一覧" },
      { key: "information", pageName: "説明資料" },
      { key: "settings", pageName: "設定" }
    ]

    setSelectedTab(key)
    setPageName(pages.find((p) => p.key === key)?.pageName ?? "")
    console.log("select tab: ", key)
  }

  return (
    <Flex>
      <SideBar selectedTab={selectedTab} onTabSelect={haneleTabSelect} />
      <VStack mt="0px" justify="start">
        <Header pageName={pageName} userName={userName} menuItems={menuItems} onMenuSelect={handleMenuSelect} />
        <Box bg="blue">main</Box>
      </VStack>
    </Flex>
  )
}

export default AppLayoutUser
