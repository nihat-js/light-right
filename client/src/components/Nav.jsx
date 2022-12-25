import React from 'react'
import './Nav.scss'

import imgLogo from '../assets/svg/logo-purple.svg'
import imgHome from '../assets/svg/home.svg'
import imgWorld from '../assets/svg/world.png'
import imgSearch from '../assets/svg/search.png'
import imgNotification from '../assets/svg/notification.png'
import imgChat from '../assets/svg/chat.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="left-column">
            <Link to='/home'>
              <img src={imgHome} alt="" />
            </Link>
            <Link to='/world'>
              <img src={imgWorld} alt="" />
            </Link>
          </div>
          <div className="center-column">
            <input type="text" />
            <img className='search' src={imgSearch} alt="" />
            <button> Search </button>
          </div>
          <div className="right-column">
            <img src={imgNotification} alt="" />
            <img src={imgChat} alt="" />
          </div>
        </div>
      </div>

    </nav>
  )
}
