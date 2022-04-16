import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router"
import { Box, Text, Divider, Flex } from "@chakra-ui/react"
import ChevronLeftIcon from "src/components/icons/ChevronLeftIcon"
import Button from "src/components/chakra-ui/Button"
import ReferrerHeader from "src/components/ReferrerHeader"
import StepBar from "src/components/AnswerProgressTabs"
import { Description } from "./StyledText"
import Question, { AnswerInputType } from "./Question"
import { useTranslation } from "react-i18next"
import theme from "src/shared/theme"
import { useReferrerSteps } from "src/hooks/referrer/useReferrerSteps"
import { NarrativeQuestion } from "src/graphql/generated"

type QuestionType = Pick<NarrativeQuestion, "id" | "title" | "answerExample0" | "answerExample1"> & {
  answer?: string
}

const Questionnaire: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const steps = useReferrerSteps()

  // TODO query: 推薦者のID、候補者のID、質問・質問回答/質問テンプレート？を取得する
  // TODO: 試験用データ削除
  const data: QuestionType[] = [
    {
      id: "1",
      title: "一緒に働く上で、依頼者にパフォーマンスを発揮していただくために?",
      answerExample0: "answerExample0 answerExample0 answerExample0 answerExample0 answerExample0 answerExample0 ",
      answerExample1: "answerExample1 answerExample1",
      answer: "answer answer answer answer answer answer answer answer"
    },
    {
      id: "2",
      title:
        "一緒に働く上で、依頼者にパフォーマンスを発揮していただくために、周囲や会社が気をつけるべきことはありますか?",
      answerExample0: "answerExample0 answerExample0 answerExample0",
      answerExample1: "answerExample1",
      answer: "answer answer answer answer answer answer answer answer"
    },
    {
      id: "3",
      title: "一緒に働く上で、依頼者にパフォーマンスを発揮していただくために、が気をつけるべきことはありますか?",
      answerExample0: "answerExample0 answerExample0 answerExample0 ",
      answerExample1:
        "answerExample1 answerExample1 answerExample1 answerExample1 answerExample1 answerExample1 answerExample1 ",
      answer: ""
    },

    {
      id: "4",
      title: "一緒に働く上で、依頼者にパフォーマンスを発揮していただくために,周囲や会社",
      answerExample0: "answerExample0 answerExample0 answerExample0",
      answerExample1: "answerExample1",
      answer: "answer answer answer answer answer answer answer answer"
    }
  ]

  const [questions, setQuestions] = useState<QuestionType[]>(data)

  useEffect(() => {
    // 質問、質問回答表示情報(questions)を初期設定
  }, [])

  const handleAnswerInput = useCallback(
    ({ questionId, answer }: AnswerInputType) => {
      setQuestions(
        questions.map((q) => {
          return questionId === q.id ? { ...q, answer: answer } : q
        })
      )
    },
    [questions, setQuestions]
  )

  const handleNext = useCallback(() => {
    // TODO: call mutation save question answers
    console.log("handleNext")
  }, [])

  const handleCancel = useCallback(() => {
    setQuestions(data)
  }, [data, setQuestions])

  return (
    <Box minH="100vh" pb="45px" bg={theme.color.BG02}>
      <ReferrerHeader />
      <Box mt={10}>
        <StepBar steps={steps} stepId={3} />
      </Box>
      <Box maxW="840px" m="25px auto 0px" p="33px 36px" borderRadius="5px" bg={theme.color.BG01}>
        <Text w="100%" fontWeight="700" fontSize="22px" lineHeight="33px" color={theme.color.text.text02}>
          {t("referrer.questionnarire.title")}
        </Text>
        <Box mt="12px">
          <Description>{t("referrer.questionnarire.description1")}</Description>
        </Box>
        <Description>{t("referrer.questionnarire.description2")}</Description>
        <Box mt="14px">
          <Description>{t("referrer.questionnarire.description3")}</Description>
        </Box>
        <Text mt="17px" fontWeight="700" fontSize="16px" lineHeight="24px" color={theme.color.text.text02}>
          {t("referrer.questionnarire.questionTotal", {
            total: questions.length
          })}
        </Text>
        <Divider mt="16px" />

        {questions.map((q, index) => {
          return (
            <Box key={q.id} w="100%" mt={index === 0 ? "16px" : "36px"}>
              <Question index={index} total={questions.length} question={q} onAnswerInput={handleAnswerInput} />
            </Box>
          )
        })}

        <Flex mt="67px" alignItems="center">
          <Flex alignItems="center" onClick={() => navigate(-1)}>
            <ChevronLeftIcon w="7px" h="10px" />
            <Text ml="11px" fontWeight="500" fontSize="12px" lineHeight="24px" color={theme.color.text.subText02}>
              {t("referrer.questionnarire.goBack")}
            </Text>
          </Flex>
          <Button styleType="lightPrimary" w="174px" h="36px" ml="46px" onClick={handleCancel}>
            {t("referrer.questionnarire.cancel")}
          </Button>
          <Button styleType="primary" w="192px" h="36px" ml="36px" onClick={handleNext}>
            {t("referrer.questionnarire.next")}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Questionnaire
