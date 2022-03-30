import React from "react"
import { VStack, Avatar, Box, Divider, Spacer } from "@chakra-ui/react"
import HelpIcon from "src/components/Icons/HelpIcon"
import Text from "src/components/Text"
import NavBarTab from "./NavBarTab"
import { userRoute } from "src/hooks/route/routes"

import theme from "src/theme/theme"

interface PropsTyps {
  selectedTab: string
  onTabSelect: (key: string) => void
}

const NavBar: React.FC<PropsTyps> = ({ selectedTab, onTabSelect }) => {
  const sideBarRoutes = userRoute.routes

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
      {sideBarRoutes.map((route, index) => {
        return (
          <Box key={route.key} mt="0px !important">
            <NavBarTab
              id={route.key}
              title={route.navLink.title}
              isSelected={selectedTab === route.key}
              icon={route.navLink.icon}
              onSelect={onTabSelect}
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

export default NavBar
