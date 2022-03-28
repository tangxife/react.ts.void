import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Text from "src/components/Text"

import theme from "src/theme/theme"
import LoginForm from "./LoginForm"

const Login: React.FC = () => {
  return (
    <Flex w="100VW" h="100VH" bg={theme.Color.Bg.bg_02}>
      <Box w="400px" h="454px" m="auto" borderRadius="12px" bg={theme.Color.Bg.bg_01}>
        <Box mt="60px" textAlign="center">
          <Text fontStyle="h3">track</Text>
        </Box>
        <Box mt="45px" ml="40px">
          <LoginForm />
        </Box>
        <Box ml="40px" mt="16px">
          <Text fontStyle="xsm-thin" as="span">
            パスワードを忘れた場合は
          </Text>
          <Text fontStyle="xsm-thin" as="span" fontColor={theme.Color.Primary.primary}>
            こちら
          </Text>
        </Box>
        <Box ml="40px" mt="10px">
          <Text fontStyle="xsm-thin" as="span">
            お申し込みがまだの方は
          </Text>
          <Text fontStyle="xsm-thin" as="span" fontColor={theme.Color.Primary.primary}>
            こちら
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
