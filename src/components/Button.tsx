import React from "react"
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"
import theme from "src/theme/theme"

type PropsType = ButtonProps & {
  buttonSchema: "primary1" | "primary2" | "secondary" | "text" | "nagative"
}

const Button: React.FC<PropsType> = ({ buttonSchema, isDisabled, children, ...otherProps }) => {
  const commonStyle = {
    size: "md",
    borderRadius: "3px",
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "24px"
  }

  const primary1Style = {
    ...commonStyle,
    color: theme.Color.Text.white,
    bg: isDisabled ? "rgba(4, 71, 254, 0.4)" : theme.Color.Primary.primary,
    _hover: { bg: theme.Color.Other.dark_blue }
  }

  // todo
  const primary2Style = {
    ...commonStyle,
    bg: isDisabled ? "rgba(225, 236, 254, 0.4)" : theme.Color.Primary.primary2,
    _hover: { bg: theme.Color.Other.dark_blue2 }
  }

  // todo
  const secondaryStyle = {
    ...commonStyle,
    // bg: isDisabled ? "rgba(4, 71, 254, 0.4)" : theme.Color.Primary,
    border: theme.Border.border_02,
    _hover: { bg: theme.Color.Other.dark_blue }
  }

  // todo
  const textStyle = {
    ...commonStyle,
    bg: isDisabled ? "rgba(4, 71, 254, 0.4)" : theme.Color.Primary,
    _hover: { bg: theme.Color.Other.dark_blue }
  }

  // todo
  const nagativeStyle = {
    ...commonStyle,
    bg: isDisabled ? "rgba(4, 71, 254, 0.4)" : theme.Color.Primary,
    _hover: { bg: theme.Color.Other.dark_blue }
  }

  // todo
  const renderButton = (props: ButtonProps) => {
    return (
      <ChakraButton {...props} {...otherProps}>
        {children}
      </ChakraButton>
    )
  }

  switch (buttonSchema) {
    case "primary1":
      return renderButton(primary1Style)
    case "primary2":
      return renderButton(primary2Style)
    case "secondary":
      return renderButton(secondaryStyle)
    case "text":
      return renderButton(textStyle)
    case "nagative":
      return renderButton(nagativeStyle)
    default:
      return renderButton(primary1Style)
  }
}

export default Button
