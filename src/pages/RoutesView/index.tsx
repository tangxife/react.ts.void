import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayoutUser from "./AppLayoutUser"
import AppLayoutCandidate from "./AppLayoutCandidate"
import AppLayoutReferrer from "./AppLayoutReferrer"
import Login from "src/pages/User/Login"

const RoutesView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayoutUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<AppLayoutUser />} />
        <Route path="/candidate" element={<AppLayoutCandidate />} />
        <Route path="/referrer" element={<AppLayoutReferrer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesView
