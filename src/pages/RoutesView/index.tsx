import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "src/pages/Home"
import Candidate from "src/pages/Candidate"

const RoutesView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="candidate" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesView
