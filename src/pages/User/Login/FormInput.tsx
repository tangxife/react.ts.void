import React from "react"
import Input from "src/components/Input"
import { FormControl, FormLabel, InputProps } from "@chakra-ui/react"
import theme from "src/theme/theme"

type PropsType = {
  label?: string
  inputType: "name" | "email" | "password"
  value?: string
  onInputChange?: InputProps["onChange"]
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
    <FormControl>
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
