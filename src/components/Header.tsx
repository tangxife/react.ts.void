import React from "react"
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import Text from "./Text"

import theme from "src/theme/theme"

type MenuItemType = {
  key: string
  menuTitle: string
}

interface PropsType {
  title?: string
  userName: string
  menuItems?: MenuItemType[]
  onMenuSelect?: (key: string) => void
}

const Header: React.FC<PropsType> = ({ title, userName, menuItems, onMenuSelect }) => {
  const handleMenuSelect = (key: string) => {
    if (onMenuSelect) {
      onMenuSelect(key)
    } else {
      console.log("men clicked!")
    }
  }

  return (
    <Flex w="1354px" h="72px" bg={theme.Color.Bg.bg_01} alignItems="center">
      {title && (
        <Box marginLeft="36px">
          <Text fontStyle="h3">{title}</Text>
        </Box>
      )}
      <Spacer />
      <Menu>
        <MenuButton
          width="258px"
          height="48px"
          marginRight="36px"
          border={theme.Border.border_01}
          borderRadius="5px"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="700"
          transition="all 0.2s"
          fontSize="12px"
          lineHeight="18px"
          textAlign="center"
          bg={theme.Color.Bg.bg_01}
          _focus={{ boxShadow: "outline" }}
        >
          {userName} <ChevronDownIcon />
        </MenuButton>
        {menuItems && (
          <MenuList p="4px" fontStyle="normal" fontWeight="400" fontSize="12px" lineHeight="20px">
            {menuItems.map((menuItem) => {
              return (
                <MenuItem key={menuItem.key} onClick={() => handleMenuSelect(menuItem.key)}>
                  {menuItem.menuTitle}
                </MenuItem>
              )
            })}
          </MenuList>
        )}
      </Menu>
    </Flex>
  )
}

export default Header
