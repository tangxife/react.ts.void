import React from "react"
import { Flex, Box } from "@chakra-ui/react"
import theme from "../../../theme/theme"

type PropsType = {
  tabSelected: string
  onSelect: (key: string) => void
}

const candidateStatues = [
  { key: "all", title: "全候補者" },
  { key: "draft", title: "下書き" },
  { key: "unopen", title: "未開封" },
  { key: "unregister", title: "未登録" },
  { key: "unanswered", title: "未回答" },
  { key: "finished", title: "完了" }
]

const StatusTabs: React.FC<PropsType> = ({ tabSelected, onSelect }) => {
  return (
    <Flex flexDirection="row">
      {candidateStatues.map((s) => {
        return (
          <Box
            key={s.key}
            w="96px"
            h="29px"
            borderBottom={tabSelected === s.key ? theme.Border.border_04 : ""}
            fontSize="15px"
            textAlign="center"
            onClick={() => onSelect(s.key)}
          >
            {s.key === "all" ? s.title : `${s.title}(5)`}
          </Box>
        )
      })}
    </Flex>
  )
}

export default StatusTabs
