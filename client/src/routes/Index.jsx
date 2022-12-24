import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Index'

export default function Index() {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
    </Routes>
  )
}
