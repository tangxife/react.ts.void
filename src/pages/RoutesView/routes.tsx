import React from "react"
import AppLayoutUser from "src/pages/RoutesView/AppLayoutUser"
import AppLayoutCandidate from "src/pages/RoutesView/AppLayoutCandidate"
import AppLayoutReferrer from "src/pages/RoutesView/AppLayoutReferrer"
import Login from "src/pages/User/Login"
import Home from "src/pages/User/Home"
import Candidates from "src/pages/User/Candidates"
import Questions from "src/pages/User/Questions"
import Information from "src/pages/User/Information"
import Settings from "src/pages/User/Settings"
import HomeIcon from "src/components/Icons/HomeIcon"
import CandidatesIcon from "src/components/Icons/CandidatesIcon"
import QuestionsIcon from "src/components/Icons/QuestionsIcon"
import InformationIcon from "src/components/Icons/InformationIcon"
import SettingsIcon from "src/components/Icons/SettingsIcon"

type LinkType = {
  title: string
  icon?: React.ReactNode
}

export type RouteType = {
  key: string
  path: string
  pageName?: string
  navLink?: LinkType
  element: React.ReactNode
  default?: boolean
  routes?: RouteType[]
}

export const rootRoute = {
  key: "root",
  path: "/",
  element: <AppLayoutUser />,
  // todo 需要这个吗？
  routes: [
    {
      key: "home",
      path: "/home",
      pageName: "",
      navLink: { title: "ホーム", icon: <HomeIcon fontSize="24px" /> },
      element: <Home />,
      default: true
    }
  ]
}

export const loginRoute = { key: "login", path: "/login", element: <Login /> }

export const userRoute = {
  key: "user",
  path: "/user",
  element: <AppLayoutUser />,
  routes: [
    {
      key: "home",
      path: "/user/home",
      pageName: "",
      navLink: { title: "ホーム", icon: <HomeIcon fontSize="24px" /> },
      element: <Home />,
      default: true
    },
    {
      key: "candidates",
      path: "/user/candidates",
      pageName: "候補者一覧",
      navLink: { title: "候補者", icon: <CandidatesIcon fontSize="24px" /> },
      element: <Candidates />
    },
    {
      key: "questions",
      path: "/user/questions",
      pageName: "質問テンプレート一覧",
      navLink: { title: "質問", icon: <QuestionsIcon fontSize="24px" /> },
      element: <Questions />
    },
    {
      key: "information",
      path: "/user/information",
      pageName: "説明資料",
      navLink: { title: "説明資料", icon: <InformationIcon fontSize="24px" /> },
      element: <Information />
    },
    {
      key: "settings",
      path: "/user/settings",
      pageName: "設定",
      navLink: { title: "設定", icon: <SettingsIcon fontSize="24px" /> },
      element: <Settings />
    }
  ]
}

export const candidateRoute = { key: "candidate", path: "/candidate", element: <AppLayoutCandidate /> }
export const referrerRoute = { key: "referrer", path: "/referrer", element: <AppLayoutReferrer /> }
