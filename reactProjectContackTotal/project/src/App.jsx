import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { SignInPage, SignUpPage } from './page'

const App = () => {
  return (
    <div className="w-screen h-screen ">
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign_up" element={<SignUpPage />} />
    </Routes>
  </div>

  )
}

export default App