import React from 'react'
import imgThreeDot from '../assets/svg/three-dot.png'


export default function Post() {
  return (
    <div className='post'>
      <div className="author">
        <div className="left-column">
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
      <figure className='image'>
        <img src="" alt="" />
      </figure>
      <div className="info">
        <h3> Today i created this app for testing </h3>
      </div>
      <div className="action">
        <div className="like"></div>
        <div className="mention"></div>
      </div>
      <div className="comments">
        <div className="comment">
          <div className="author"></div>
          <div className="text">
            <p className=""> Pretty Good picture</p>
            <div className="action">
              <div className="like"></div>
              <div className="mention"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
