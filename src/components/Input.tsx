import React from "react"
import { Input as ChakraInput, InputProps } from "@chakra-ui/react"
import theme from "../theme/theme"

type PropsType = InputProps & {
  inputStyle?: "normal" | "invalid"
}

const Input: React.FC<PropsType> = ({ inputStyle, ...otherProps }) => {
  if (!inputStyle) {
    return <ChakraInput {...otherProps} />
  } else {
    const style = {
      bg: inputStyle === "normal" ? theme.Color.Shade.BK5 : theme.Color.Shade.BK16,
      border: "none",
      borderRadius: "5px"
    }

    return <ChakraInput {...style} {...otherProps} isInvalid={inputStyle === "invalid"} />
  }
}

export default Input
