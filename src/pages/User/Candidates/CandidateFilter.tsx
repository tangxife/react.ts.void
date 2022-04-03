import React, { useCallback, useState } from "react"
import { Box, Flex, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import Button from "src/components/Button"
import StatusTabs from "./StatusTabs"
import theme from "src/theme/theme"

type PropsType = {
  onSearchInputChange: (value: string) => void
  onTabSelected: (tabSelected: string) => void
}

const CandidateFilter: React.FC<PropsType> = ({ onTabSelected, onSearchInputChange }) => {
  const [selectedTab, setSelectedTab] = useState<string>("all")

  const handleTabSelect = useCallback(
    (key: string) => {
      setSelectedTab(key)
      onTabSelected(key)
    },
    [setSelectedTab]
  )

  return (
    <Flex flexDirection="row" w="100%">
      <Box ml="26px">
        <StatusTabs tabSelected={selectedTab} onSelect={handleTabSelect} />
      </Box>
      <Spacer />
      <Box mr="16px">
        <InputGroup size="md">
          <Input
            w="264px"
            h="36px"
            pr="4.5rem"
            type="text"
            fontSize="16px"
            placeholder="候補者名で検索"
            onChange={(e) => {
              onSearchInputChange(e.target.value)
            }}
          />
          <InputRightElement width="2.5rem">
            <SearchIcon color={theme.Color.Text.subtext03} />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box mr="38px">
        <Button buttonSchema="primary1" w="131px" h="36px">
          候補者を登録
        </Button>
      </Box>
    </Flex>
  )
}

export default CandidateFilter
