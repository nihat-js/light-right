import React from 'react'
import { useEffect } from 'react'
import imgLogo from '../assets/svg/logo-purple.svg'
import imgHome from '../assets/svg/home.svg'
import imgWorld from '../assets/svg/world.png'
import imgSearch from '../assets/svg/search.png'
import imgNotification from '../assets/svg/notification.png'
import imgChat from '../assets/svg/chat.png'

export default function Home() {

  useEffect(() => {
    console.log(document.cookie)
  }, [])

  return (
    <main className="home">
      <nav>
        <div className="container">
          <div className="row">
            <div className="left-column">
              <img src={imgHome} alt="" />
              <img src={imgWorld} alt="" />
            </div>
            <div className="center-column">
              <input type="text" />
              <img src={imgSearch} alt="" />
              <button> Search </button>
            </div>
            <div className="right-column">
              <img src={imgNotification} alt="" />
              <img src={imgChat} alt="" />
            </div>
          </div>
        </div>

      </nav>
    </main>
  )
}
