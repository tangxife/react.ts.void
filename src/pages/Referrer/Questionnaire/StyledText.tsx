import React from "react"
import { Text } from "@chakra-ui/react"
import theme from "src/shared/theme"

type TextCommonStyleType = {
  fontWeight: string
  fontSize: string
  lineHeight: string
}

const commonStyle: TextCommonStyleType = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "134%"
}

export const Description: React.FC = ({ children }) => {
  return (
    <Text {...commonStyle} color={theme.color.text.text01}>
      {children}
    </Text>
  )
}

export const QuestionTitle: React.FC = ({ children }) => {
  return (
    <Text {...commonStyle} color={theme.color.text.text01}>
      {children}
    </Text>
  )
}

export const AnswerExample: React.FC = ({ children }) => {
  return (
    <Text {...commonStyle} color={theme.color.text.subText03}>
      {children}
    </Text>
  )
}
