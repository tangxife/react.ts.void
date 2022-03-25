import React from "react"
import { VStack, Avatar, Box, Divider, Spacer } from "@chakra-ui/react"
import HomeIcon from "src/components/Icons/HomeIcon"
import CandidateGroupIcon from "src/components/Icons/CandidatesIcon"
import QuestionsIcon from "src/components/Icons/QuestionsIcon"
import InformationIcon from "src/components/Icons/InformationIcon"
import SettingsIcon from "src/components/Icons/SettingsIcon"
import HelpIcon from "src/components/Icons/HelpIcon"
import Text from "src/components/Text"
import SideBarTab from "./SideBarTab"

import theme from "src/theme/theme"

interface PropsTyps {
  selectedTab: string
  onSelect: (key: string) => void
}

const SideBar: React.FC<PropsTyps> = ({ selectedTab, onSelect }) => {
  const sideBarItem = [
    { key: "home", title: "ホーム", icon: <HomeIcon fontSize="24px" /> },
    { key: "candidates", title: "候補者", icon: <CandidateGroupIcon fontSize="24px" /> },
    { key: "questions", title: "質問", icon: <QuestionsIcon fontSize="24px" /> },
    { key: "information", title: "説明資料", icon: <InformationIcon fontSize="24px" /> },
    { key: "settings", title: "設定", icon: <SettingsIcon fontSize="24px" /> }
  ]

  return (
    <VStack
      w="86px"
      h="100%"
      minHeight="100vh"
      borderRight="2px"
      borderColor={theme.Color.Shade.BK16}
      bg={theme.Color.Bg.bg_01}
    >
      <Avatar w="32px" h="32px" m="27px 27px 44px 27px" name="T" bg={theme.Color.Primary.primary} />
      {sideBarItem.map((item, index) => {
        return (
          <Box key={item.key} mt="0px !important">
            <SideBarTab
              id={item.key}
              title={item.title}
              isSelected={selectedTab === item.key}
              icon={item.icon}
              onSelect={onSelect}
            />
            {index === 2 && (
              <Divider width="54px" mt="20px" borderColor={theme.Color.Text.subtext04} borderBottomWidth="2px" />
            )}
          </Box>
        )
      })}
      <Spacer />
      <Box m="22px auto !important" textAlign="center" color={theme.Color.Text.subtext03}>
        <HelpIcon fontSize="24px" />
        <Text fontStyle="xsm">へルプ</Text>
      </Box>
    </VStack>
  )
}

export default SideBar
