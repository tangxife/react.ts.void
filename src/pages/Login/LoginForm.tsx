import React, { useCallback } from "react"
import { Form, Formik } from "formik"
import { Box } from "@chakra-ui/react"
import Button from "src/components/Button"
import FormInput from "./FormInput"

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

  const handleSignin = useCallback(({ email, password }: InputValuesType) => {
    console.log("handleSignin: ", email, password)
  }, [])

  return (
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
