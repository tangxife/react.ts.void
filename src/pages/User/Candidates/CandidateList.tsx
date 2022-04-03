import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Flex, Box, Checkbox, Spacer } from "@chakra-ui/react"
import TrashIcon from "src/components/Icons/TrashIcon"
import Text from "src/components/Text"
import theme from "src/theme/theme"

import { CandidateFragment } from "src/graphql/generated/graphql"

type CandidateWithChecked = CandidateFragment & { isChecked: boolean }

type PropsType = {
  candidates?: CandidateFragment[]
  onSelect: (id: string) => void
  onDelete: (ids: string[]) => void
}

const CandidateList: React.FC<PropsType> = ({ candidates, onSelect, onDelete }) => {
  const [idSelected, setIdSelected] = useState<string>()
  const [candidatesWithChecked, setCandidatesWithChecked] = useState<CandidateWithChecked[]>()

  useEffect(() => {
    setCandidatesWithChecked(
      candidates?.map((c) => {
        return { ...c, isChecked: false }
      })
    )
  }, [setCandidatesWithChecked, candidates])

  const candidateIdsChecked = useMemo(() => {
    return candidatesWithChecked?.filter((c) => c.isChecked).map((c) => c.id)
  }, [candidatesWithChecked])

  const toggleCandidateChecked = useCallback(
    (id: string) => {
      setCandidatesWithChecked(
        candidatesWithChecked?.map((c) => {
          if (c.id === id) return { ...c, isChecked: !c.isChecked }
          else return { ...c }
        })
      )
    },
    [setCandidatesWithChecked, candidatesWithChecked]
  )

  const handleCandidateSelect = useCallback(
    (id: string) => {
      setIdSelected(id)
      onSelect(id)
    },
    [setIdSelected, onSelect]
  )

  const handleDelete = useCallback(() => {
    candidateIdsChecked && onDelete(candidateIdsChecked)
  }, [candidateIdsChecked])

  return (
    <Flex flexDirection="column" w="328px" borderRight={theme.Border.border_02} bg={theme.Color.Bg.bg_01}>
      <Flex w="100%" h="52px" borderBottom={theme.Border.border_02} alignItems="center">
        <Checkbox ml="17px" colorScheme="twitter" />
        <Spacer />
        <Box mr="16px" color={theme.Color.Text.subtext03} onClick={() => handleDelete()}>
          <TrashIcon mr="6px" fontSize="20px" />
          <Text as="span" fontStyle="sm" fontColor={theme.Color.Text.subtext03}>
            消除
          </Text>
        </Box>
      </Flex>
      <Box h="calc(100vh-180px)" overflow="hidden" overflowY="scroll">
        {candidatesWithChecked?.map((c) => {
          return (
            <Flex
              key={c.id}
              flexDirection="row"
              h="91px"
              borderBottom={theme.Border.border_02}
              alignItems="center"
              bg={c.id === idSelected ? theme.Color.Primary.light_blue_1 : ""}
              onClick={() => handleCandidateSelect(c.id)}
            >
              <Checkbox
                ml="17px"
                colorScheme="twitter"
                isChecked={c.isChecked}
                onChange={() => toggleCandidateChecked(c.id)}
              />
              <Box ml="16px">
                <Text fontStyle="sm" fontColor={theme.Color.Text.subtext02}>
                  {c.answerDeadline}
                </Text>
                <Text fontStyle="h5" fontColor={theme.Color.Text.text03}>
                  {c.name}
                </Text>
                <Text fontStyle="sm" fontColor={theme.Color.Text.subtext02}>
                  {c.jobTitle}
                </Text>
              </Box>
              <Spacer />
              {c.id === idSelected ? (
                <Box w="10px" h="10px" mr="25px" border="5px solid red" borderRadius="5px" />
              ) : (
                <></>
              )}
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}

export default CandidateList
