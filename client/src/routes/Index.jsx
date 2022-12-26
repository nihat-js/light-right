import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/Index'
import Home from '../pages/Home'
import User from '../pages/User'

export default function Index() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/home' element={<Home />} />

      <Route path='/user/' element={<User />} ></Route>
      <Route path='/user/:username' element={<User />} ></Route>
    </Routes>
  )
}
