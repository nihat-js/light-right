import React from 'react'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Post from '../components/Post'

export default function Home() {

  useEffect(() => {
    console.log(document.cookie)
  }, [])

  return (
    <main className="home">
      <div>
        <Nav />
      </div>
      <div className='feed'>
        <Post />
      </div>
    </main>
  )
}
