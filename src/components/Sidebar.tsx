import React from "react"
import { VStack, Avatar } from "@chakra-ui/react"
import HomeIcon from "src/components/Icons/HomeIcon"

import theme from "src/theme/theme"

const Sidebar: React.FC = () => {
  return (
    <VStack w="86px" h="100%" bg="cyan">
      <Avatar w="32px" h="32px" m="27px" name="T" bg={theme.Color.Primary.primary} />
      <HomeIcon />
    </VStack>
  )
}

export default Sidebar
