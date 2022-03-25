import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayoutUser from "./AppLayoutUser"
import Candidate from "src/pages/Candidate"

const RoutesView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayoutUser />} />
        <Route path="candidate" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesView
