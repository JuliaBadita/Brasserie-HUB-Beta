import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomeTest from './pages/HomeTest'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTest />} />
          <Route path="" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
