import React from 'react'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Post from '../components/Post'

import '../assets/style/style.scss'
import './Home.scss'
import Side from '../components/Side'
import SharePost from '../components/SharePost'


export default function Home() {

  useEffect(() => {
    console.log(document.cookie)
  }, [])

  return (
    <main className="home">
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className='feed'>
          <SharePost />
          <Post />
          <Post />
          <Post />
        </div>
        <aside>
          <Side />
        </aside>
      </div>
    </main>
  )
}
