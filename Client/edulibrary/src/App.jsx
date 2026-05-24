import React from 'react'
import {BrowserRouter, useLocation} from 'react-router-dom'
import Headder from './Main/Headder'
import Content from './Main/Content'

const Layout = () => {
  const location = useLocation()

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/register"||
    location.pathname==="/"

  return (
    <>
      {!hideHeader && <Headder />}
      <Content />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  )
}

export default App