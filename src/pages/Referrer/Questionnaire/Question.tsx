import React from "react"
import { Flex, Box, Text } from "@chakra-ui/react"
import { QuestionTitle, AnswerExample } from "./StyledText"
import theme from "src/shared/theme"
import { NarrativeQuestion } from "src/graphql/generated"
import Input from "src/components/chakra-ui/Input"

// TODO: サーバ側実装完了してから対応（一時的対応）
export type AnswerInputType = {
  questionId: string
  answer: string
}

export type PropsType = {
  question: Pick<NarrativeQuestion, "id" | "title" | "answerExample0" | "answerExample1"> & {
    answer?: string
  }
  index: number
  total: number
  onAnswerInput: (answerInput: AnswerInputType) => void
}

const Question: React.FC<PropsType> = ({ question, index, total, onAnswerInput }) => {
  const { title, answerExample0, answerExample1 } = question

  return (
    <Flex flexDirection="column" w="100%" alignItems="center">
      <Flex alignItems="center" w="100%">
        <Text
          w="51px"
          h="35px"
          mr="15px"
          bg={theme.color.text.subText09}
          fontWeight="700"
          fontSize="16px"
          lineHeight="35px"
          textAlign="center"
          color={theme.color.text.white}
        >
          {index + 1}/{total}
        </Text>
        <QuestionTitle>{title}</QuestionTitle>
      </Flex>
      <Box w="100%" mt="10px" p="12px" borderRadius="5px" bg={theme.color.BK5}>
        <AnswerExample>{answerExample0}</AnswerExample>
        <Box w="100%" mt="14px">
          <AnswerExample>{answerExample1}</AnswerExample>
        </Box>
        <Input
          mt="12px"
          border="none"
          value={question.answer}
          onChange={(answer) => onAnswerInput({ questionId: question.id, answer })}
        />
      </Box>
    </Flex>
  )
}

export default Question
