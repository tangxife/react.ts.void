import React, { useState, useMemo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"
import NavBar from "src/components/NavBar"
import Header from "src/components/Header"

import { userRoute } from "src/pages/RoutesView/routes"

const AppLayoutUser: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const userName = "エッグフォワード中途採用担当者様"
  const [pageName, setPageName] = useState<string>("")

  const handleMenuSelect = (key: string) => {
    console.log("select menu: ", key)
  }

  const haneleTabSelect = (key: string) => {
    const route = userRoute.routes.find((r) => r.key === key)

    if (route) {
      navigate(route.path)
      setPageName(route.pageName)
    }
  }

  const selectedTab = useMemo(() => {
    const key = location.pathname.split("/").pop()
    return key === "" || key === "user" ? "home" : key ?? "home"
  }, [location.pathname])

  return (
    <Flex flexDirection="row">
      <NavBar selectedTab={selectedTab ?? "home"} onTabSelect={haneleTabSelect} />
      <Flex flexDirection="column" mt="0px" justify="start">
        <Header pageName={pageName} userName={userName} onMenuSelect={handleMenuSelect} />
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}

export default AppLayoutUser
