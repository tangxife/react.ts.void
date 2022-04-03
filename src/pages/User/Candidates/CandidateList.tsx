import React from "react"
import { Flex, Box, Checkbox, Spacer } from "@chakra-ui/react"
import TrashIcon from "src/components/Icons/TrashIcon"
import Text from "src/components/Text"
import theme from "src/theme/theme"

type PropsType = {
  onDelete: () => void
}

const candidates = [
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: true },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false },
  { answerDeadline: "[期日]12/28", name: "田中 太郎", department: "営業/法人営業(新規開拓)", selected: false }
]

const CandidateList: React.FC<PropsType> = ({ onDelete }) => {
  return (
    <Flex flexDirection="column" w="328px" borderRight={theme.Border.border_02} bg={theme.Color.Bg.bg_01}>
      <Flex w="100%" h="52px" borderBottom={theme.Border.border_02} alignItems="center">
        <Checkbox ml="17px" colorScheme="green" defaultChecked />
        <Spacer />
        <Box mr="16px" color={theme.Color.Text.subtext03} onClick={onDelete}>
          <TrashIcon mr="6px" fontSize="20px" />
          <Text as="span" fontStyle="sm" fontColor={theme.Color.Text.subtext03}>
            消除
          </Text>
        </Box>
      </Flex>
      <Box h="calc(100vh-180px)" overflow="hidden" overflowY="scroll">
        {candidates.map((c, index) => {
          return (
            <Flex
              key={index}
              flexDirection="row"
              h="91px"
              borderBottom={theme.Border.border_02}
              alignItems="center"
              bg={c.selected ? theme.Color.Primary.light_blue_1 : ""}
            >
              <Checkbox ml="17px" colorScheme="green" defaultChecked />
              <Box ml="16px">
                <Text fontStyle="sm" fontColor={theme.Color.Text.subtext02}>
                  {c.answerDeadline}
                </Text>
                <Text fontStyle="h5" fontColor={theme.Color.Text.text03}>
                  {c.name}
                </Text>
                <Text fontStyle="sm" fontColor={theme.Color.Text.subtext02}>
                  {c.department}
                </Text>
              </Box>
              <Spacer />
              {c.selected ? <Box w="10px" h="10px" mr="25px" border="5px solid red" borderRadius="5px" /> : <></>}
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}

export default CandidateList
