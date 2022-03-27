import React from "react"
import { Input as ChakraInput, InputProps } from "@chakra-ui/react"
import theme from "../theme/theme"

type PropsType = Omit<InputProps, "onChange"> & {
  inputStyle: "normal" | "invalid"
  onChange?: (value: string) => void
}

const Input: React.FC<PropsType> = ({ inputStyle, onChange, ...otherProps }) => {
  const style = {
    bg: inputStyle === "normal" ? theme.Color.Shade.BK5 : theme.Color.Shade.BK16,
    border: "none",
    borderRadius: "5px"
  }

  return (
    <ChakraInput
      {...style}
      {...otherProps}
      isInvalid={inputStyle === "invalid"}
      onChange={(e) => {
        if (onChange) onChange(e.target.value)
      }}
    />
  )
}

export default Input
