import React from "react"
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()
  return <div className="App">{t("language")}</div>
}

export default App
