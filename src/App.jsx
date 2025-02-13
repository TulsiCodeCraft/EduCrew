import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage"
import AuthPages from "./AuthPage"

export default function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPages />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}