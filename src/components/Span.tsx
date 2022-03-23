import React from "react"

import theme from "src/theme/theme"

type PropsType = {
  textTheme: "heading1" | "heading2"
}

const Span: React.FC<PropsType> = ({ textTheme, children }) => {
  switch (textTheme) {
    case "heading1":
      return <span color={theme.Color.Error.error_text}>{children}</span>
    default:
      return <></>
  }
}

export default Span
