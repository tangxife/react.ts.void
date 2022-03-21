import React from "react"
import { Text as ChakraText, TextProps } from "@chakra-ui/react"

import theme from "../theme/theme"

type PropsType = {
  textTheme: "heading1"
}

const Text: React.FC<PropsType> = ({ textTheme }) => {
  const heading1: TextProps = {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "61px",
    color: theme.color.Text.text01
  }

  switch (textTheme) {
    case "heading1":
      return <ChakraText {...heading1}>fafdafdafa </ChakraText>
    default:
      return <></>
  }
}

export default Text
