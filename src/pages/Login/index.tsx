import React, { useCallback } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { Formik, Form } from "formik"
import Text from "src/components/Text"
import Button from "src/components/Button"
import FormInput from "./FormInput"

import theme from "src/theme/theme"

type InputValuesType = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const handleValidate = useCallback(({ email, password }: InputValuesType) => {
    const errors = { email: "", password: "" }

    if (!email) {
      errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address"
    }

    if (!password) {
      errors.password = "Required"
    }

    if (errors.email !== "" || errors.password !== "") return errors
  }, [])

  const handleSignin = useCallback(({ email, password }: InputValuesType) => {
    console.log("handleSignin: ", email, password)
  }, [])

  return (
    <Flex w="100VW" h="100VH" bg={theme.Color.Bg.bg_02}>
      <Box w="400px" h="454px" m="auto" borderRadius="12px" bg={theme.Color.Bg.bg_01}>
        <Box mt="60px" textAlign="center">
          <Text fontStyle="h3">track</Text>
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={handleValidate}
          onSubmit={(values, { setSubmitting }) => {
            handleSignin(values)
            setSubmitting(false)
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Box m="45px 40px 0px">
                <FormInput label="メールアドレス" inputType="email" onInputChange={handleChange} value={values.email} />
              </Box>
              <Box m="16px 40px 0px">
                <FormInput
                  label="パスワード"
                  inputType="password"
                  onInputChange={handleChange}
                  value={values.password}
                />
              </Box>
              <Button
                buttonSchema="primary1"
                type="submit"
                w="320px"
                h="40px"
                m="30px 40px 0px"
                isDisabled={isSubmitting}
              >
                サインインする
              </Button>
            </Form>
          )}
        </Formik>
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
