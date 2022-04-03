import React, { useCallback, useMemo, useState } from "react"
import { Flex, Box } from "@chakra-ui/react"
import CandidateFilter from "./CandidateFilter"
import CandidateList from "./CandidateList"
import theme from "src/theme/theme"

import { CandidateFragment, useGetCandidatesQuery } from "src/graphql/generated/graphql"

const Candidates: React.FC = () => {
  const [searchText, setSearchText] = useState<string>()
  const [tabSelected, setTabSelected] = useState<string>("")
  const [candidateSelected, setCandidateSelected] = useState<CandidateFragment>()

  const { data, refetch } = useGetCandidatesQuery()

  const filteredCandidates = useMemo(() => {
    if (!data?.myOrganization.candidates?.nodes) return
    const candidates = data.myOrganization.candidates.nodes.filter((c): c is CandidateFragment => !!c)

    return candidates?.filter((c) => {
      if (!searchText) return true
      else return c && c.name.includes(searchText)
    })
  }, [data, searchText, tabSelected])

  const handleCandidateSelect = useCallback(
    (id: string) => {
      setCandidateSelected(filteredCandidates?.find((c) => c.id === id))
    },
    [filteredCandidates]
  )

  const handleDelete = useCallback(
    (ids: string[]) => {
      console.log(ids)

      refetch().then((r) => {
        console.log(r)
      })
    },
    [refetch]
  )

  return (
    <Flex flexDirection="column">
      <Flex
        h="59px"
        borderBottom="1px"
        borderColor={theme.Color.Shade.BK16}
        bg={theme.Color.Bg.bg_01}
        alignItems="center"
      >
        <CandidateFilter onTabSelected={setTabSelected} onSearchInputChange={setSearchText} />
      </Flex>
      <Flex h="calc(100vh - 130px)" overflowY="scroll">
        <CandidateList candidates={filteredCandidates} onSelect={handleCandidateSelect} onDelete={handleDelete} />
        <Box bg="blue.50" flex="1">
          id: {candidateSelected?.id}
          <br />
          name: {candidateSelected?.name}
          <br />
          answerDeadline: {candidateSelected?.answerDeadline}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Candidates
