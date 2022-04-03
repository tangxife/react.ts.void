import React, { useCallback } from "react"
import { Flex, Box } from "@chakra-ui/react"
import CandidateFilter from "./CandidateFilter"
import theme from "src/theme/theme"
import CandidateList from "./CandidateList"

const Candidates: React.FC = () => {
  const handleFilter = useCallback(() => {
    console.log("handleFilter")
  }, [])

  const handleDelete = useCallback(() => {
    console.log("handleDelete")
  }, [])

  return (
    <Flex flexDirection="column">
      <Flex
        h="59px"
        borderBottom="1px"
        borderColor={theme.Color.Shade.BK16}
        bg={theme.Color.Bg.bg_01}
        alignItems="center"
      >
        <CandidateFilter onFilter={handleFilter} />
      </Flex>
      <Flex h="calc(100vh - 130px)" overflowY="scroll">
        <CandidateList onDelete={handleDelete} />
        <Box bg="blue.50" flex="1">
          CandidateDetail
        </Box>
      </Flex>
    </Flex>
  )
}

export default Candidates
