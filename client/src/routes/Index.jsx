import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Index'
import Home from '../pages/Home'

export default function Index() {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}
