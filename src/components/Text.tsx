import React from "react"
import { Text as ChakraText } from "@chakra-ui/react"
import theme from "../theme/theme"

type StyleType = {
  fontFamily: string
  fontStyle: string
  fontWeight: string
  color: string
  fontSize: string
  lineHeight: string
}

type PropsType = {
  textStyle:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "md"
    | "md-thin"
    | "sm"
    | "sm-thin"
    | "sm-bold"
    | "xsm"
    | "xsm-thin"
    | "xsm-bold"
  as?: "span" | "div"
}

const Text: React.FC<PropsType> = ({ textStyle, as, children }) => {
  const commonStyle = {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "700",
    color: theme.Color.Text.text01
  }

  type TestType = Pick<PropsType, "as">
  const h1Style = { ...commonStyle, fontSize: "40px", lineHeight: "61px" }
  const h2Style = { ...commonStyle, fontSize: "28px", lineHeight: "43px" }
  const h3Style = { ...commonStyle, fontSize: "22px", lineHeight: "33px" }
  const h4Style = { ...commonStyle, fontSize: "18px", lineHeight: "27px" }
  const h5Style = { ...commonStyle, fontSize: "16px", lineHeight: "24px" }
  const h6Style = { ...commonStyle, fontSize: "13px", lineHeight: "20px" }
  const mdStyle = { ...commonStyle, fontWeight: "500", fontSize: "16px", lineHeight: "195.5%" }
  const mdThinStyle = { ...commonStyle, fontWeight: "400", fontSize: "16px", lineHeight: "195.5%" }
  const smStyle = { ...commonStyle, fontWeight: "500", fontSize: "14px", lineHeight: "134%" }
  const smThinStyle = { ...commonStyle, fontWeight: "400", fontSize: "14px", lineHeight: "134%" }
  const smBoldStyle = { ...commonStyle, fontWeight: "700", fontSize: "14px", lineHeight: "134%" }
  const xsmStyle = { ...commonStyle, fontWeight: "500", fontSize: "12px", lineHeight: "122%" }
  const xsmThinStyle = { ...commonStyle, fontWeight: "400", fontSize: "12px", lineHeight: "122%" }
  const xsmBoldStyle = { ...commonStyle, fontWeight: "700", fontSize: "12px", lineHeight: "122%" }

  const renderText = (fontStyle: StyleType, elType?: TestType) => {
    return elType && elType === "span" ? (
      <span style={fontStyle}>{children}</span>
    ) : (
      <ChakraText style={fontStyle}>{children}</ChakraText>
    )
  }

  switch (textStyle) {
    case "h1":
      return renderText(h1Style, { as })
    case "h2":
      return renderText(h2Style, { as })
    case "h3":
      return renderText(h3Style, { as })
    case "h4":
      return renderText(h4Style, { as })
    case "h5":
      return renderText(h5Style, { as })
    case "h6":
      return renderText(h6Style, { as })
    case "md":
      return renderText(mdStyle, { as })
    case "md-thin":
      return renderText(mdThinStyle, { as })
    case "sm":
      return renderText(smStyle, { as })
    case "sm-thin":
      return renderText(smThinStyle, { as })
    case "sm-bold":
      return renderText(smBoldStyle, { as })
    case "xsm":
      return renderText(xsmStyle, { as })
    case "xsm-thin":
      return renderText(xsmThinStyle, { as })
    case "xsm-bold":
      return renderText(xsmBoldStyle, { as })
    default:
      return <></>
  }
}

export default Text
