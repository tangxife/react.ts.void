import React from "react"
import Input from "src/components/Input"
import { FormControl, FormLabel } from "@chakra-ui/react"
import theme from "src/theme/theme"

type PropsType = {
  label?: string
  inputType: "name" | "email" | "password"
  value?: string
  onInputChange?: (value: string) => void
}

const FormInput: React.FC<PropsType> = ({ label, inputType, onInputChange, value }) => {
  const formLabelStyle = {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "17px",
    color: theme.Color.Text.subtext02
  }

  return (
    <FormControl isRequired>
      {label && (
        <FormLabel htmlFor={inputType} {...formLabelStyle}>
          {label}
        </FormLabel>
      )}
      <Input
        inputStyle="normal"
        id={inputType}
        w="320px"
        h="40px"
        type={inputType}
        onChange={onInputChange}
        value={value}
      />
    </FormControl>
  )
}

export default FormInput
