import React from "react"
import { Box } from "@chakra-ui/react"
import Text from "src/components/Text"
import theme from "src/theme/theme"

interface PropsType {
  id: string
  isSelected: boolean
  title: string
  icon: JSX.Element
  onSelect: (key: string) => void
}

const NavBarTab: React.FC<PropsType> = ({ id, isSelected, title, icon, onSelect }) => {
  return (
    <Box
      m="22px auto !important"
      textAlign="center"
      color={isSelected ? theme.Color.Primary.primary : theme.Color.Text.subtext03}
      onClick={() => onSelect(id)}
    >
      {icon}
      <Text fontStyle="xsm">{title}</Text>
    </Box>
  )
}

export default NavBarTab
