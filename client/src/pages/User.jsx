import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';

export default function User() {

  return (
    <main className='user-page'>
      <Nav></Nav>
      <div className="wrap">
        <div className='user'>
          <div className="pp">
            <span></span>
          </div>
          <h4 className="username"> nihat </h4>
          <div className="bio"> I am owner of this platform </div>
          <div className="stats">
            <span className='following'>0 following </span>
            <span className='followers'>0 followers</span>
            <span className='posts'> 0 posts </span>
          </div>
          <div className="row">
            <div className="row-head">
              <span> Show All </span>
              <span> Only quotes </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
