import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RouteType, rootRoute, loginRoute, userRoute, candidateRoute, referrerRoute } from "src/hooks/route/routes"

const RoutesView = () => {
  const routes = [rootRoute, loginRoute, userRoute, candidateRoute, referrerRoute]

  const generateRoutesView = (routes: RouteType[]) => {
    return routes.map((r) => {
      return r.default ? (
        <>
          <Route key="default" index element={r.element} />
          <Route key={r.key} path={r.path} element={r.element}>
            {r.routes && generateRoutesView(r.routes)}
          </Route>
        </>
      ) : (
        <Route key={r.key} path={r.path} element={r.element}>
          {r.routes && generateRoutesView(r.routes)}
        </Route>
      )
    })
  }

  return (
    <BrowserRouter>
      <Routes>{generateRoutesView(routes)}</Routes>
    </BrowserRouter>
  )
}

export default RoutesView
