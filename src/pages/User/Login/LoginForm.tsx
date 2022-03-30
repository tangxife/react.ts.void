import React, { useCallback } from "react"
import { Form, Formik } from "formik"
import { Box } from "@chakra-ui/react"
import Button from "src/components/Button"
import FormInput from "./FormInput"

import useSignin from "src/hooks/auth/useSignin"

type InputValuesType = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
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

  const [signIn] = useSignin()

  const handleSignin = useCallback(
    ({ email, password }: InputValuesType) => {
      signIn(email, password).catch(() => {
        console.log("signin error")
      })
    },
    [signIn]
  )

  return (
    <Formik
      initialValues={{ email: "tester@test.com", password: "111111" }}
      validate={handleValidate}
      onSubmit={(values, { setSubmitting }) => {
        handleSignin(values)
        setSubmitting(false)
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Box>
            <FormInput label="メールアドレス" inputType="email" onInputChange={handleChange} value={values.email} />
          </Box>
          <Box mt="16px">
            <FormInput label="パスワード" inputType="password" onInputChange={handleChange} value={values.password} />
          </Box>
          <Button buttonSchema="primary1" type="submit" w="320px" h="40px" mt="30px" isDisabled={isSubmitting}>
            サインインする
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
