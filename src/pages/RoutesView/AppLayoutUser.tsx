import React, { useState, useMemo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"
import NavBar from "src/components/NavBar"
import Header from "src/components/Header"
import Home from "src/pages/User/Home"

import useSignout from "src/hooks/auth/useSignout"
import { userRoute } from "src/hooks/route/routes"

const AppLayoutUser: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const key = location.pathname.split("/").pop()
  const userName = "エッグフォワード中途採用担当者様"
  const [pageName, setPageName] = useState<string>("")

  const [signOut] = useSignout()

  const handleMenuSelect = (key: string) => {
    if (key === "logout") {
      signOut().catch(() => {
        console.log("signout error")
      })
    }
  }

  const handleTabSelect = (key: string) => {
    const route = userRoute.routes.find((r) => r.key === key)

    if (route) {
      navigate(route.path)
      setPageName(route.pageName)
    }
  }

  const selectedTab = useMemo(() => {
    return key === "" || key === "user" ? "home" : key ?? "home"
  }, [key])

  return (
    <Flex flexDirection="row">
      <NavBar selectedTab={selectedTab ?? "home"} onTabSelect={handleTabSelect} />
      <Flex flexDirection="column" w="100vw" minH="100vh" mt="0px" justify="start">
        <Header pageName={pageName} userName={userName} onMenuSelect={handleMenuSelect} />
        <Box flex="1">{key === "" || key === "user" ? <Home /> : <Outlet />}</Box>
      </Flex>
    </Flex>
  )
}

export default AppLayoutUser
