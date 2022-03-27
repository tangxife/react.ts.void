import React, { useCallback, useState } from "react"
import { Box, Flex } from "@chakra-ui/react"
import Text from "src/components/Text"
import Button from "src/components/Button"
import FormInput from "./FormInput"

import theme from "src/theme/theme"

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSignIn = useCallback(() => {
    console.log("email: ", email, "password: ", password)
  }, [email, password])

  return (
    <Flex w="1440px" h="900px" maxH="100VH" bg={theme.Color.Bg.bg_02}>
      <Box w="400px" h="454px" m="auto" borderRadius="12px" bg={theme.Color.Bg.bg_01}>
        <Box mt="60px" textAlign="center">
          <Text fontStyle="h3">track</Text>
        </Box>
        <FormInput m="45px 40px 0px" inputType="email" label="メールアドレス" onInputChange={setEmail} value={email} />
        <FormInput
          m="16px 40px 0px"
          inputType="password"
          label="パスワード"
          onInputChange={setPassword}
          value={password}
        />
        <Button buttonSchema="primary1" w="320px" h="40px" m="30px 40px 0px" onClick={handleSignIn}>
          サインインする
        </Button>
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
