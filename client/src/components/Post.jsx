import React from 'react'
import './Post.scss'

import imgThreeDot from '../assets/svg/three-dot.png'
import imgUp from '../assets/svg/up.svg'
import imgDown from '../assets/svg/down.svg'

export default function Post() {
  return (
    <div className='post'>
      <div className="author">
        <div className="user">
          <figure className="profile-picture">
            <span></span>
          </figure>
          <h4 className="username"> Nihat</h4>
        </div>
        <div className="right-column">
          <figure className='three-dot'>
            <img src={imgThreeDot} alt="" />
          </figure>
        </div>
      </div>
      <figure className='content-image'>
        <img src="" alt="" />
      </figure>
      <div className="content-text">
        <h3 className='text'> Today i created this app for testing </h3>
      </div>
      <div className="info">
        <div className="action">
          <img className='up' src={imgUp} alt="" />
          <span className='count'> 0 </span>
          <img className='down' src={imgDown} alt="" />
        </div>
        <div className="time">
          Today 12 :25
        </div>
      </div>
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <p> ... Load more  </p>
      </div>

    </div>
  )
}

function Comment() {

  return (
    <div className="comment">
      <div className="author">
        <span className='pp'></span>
        <span className='username'> nihat0 </span>
      </div>
      <div className="content">
        <p className=""> Pretty Good picture</p>
      </div>
      <div className="action">
        <img className='up' src={imgUp} alt="" />
        <span className='count'> 0 </span>
        <img className='down' src={imgDown} alt="" />
      </div>

    </div>
  )
}