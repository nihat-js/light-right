import React from 'react'
import './index.scss'
import logoPurple from '../assets/svg/logo-purple.svg'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {

  const registerUrl = "http://localhost:1000/register"

  const [registerUsername, setRegisterUsername] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    axios.post(registerUrl, {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    }).then(res => {
      console.log(res)
    })

  }
  const handleRegisterChange = (el) => {
    if (el.name == 'username') {
      setRegisterUsername(el.value)
    } else if (el.name == 'email') {
      setRegisterEmail(el.value)
    } else if (el.name == 'password') {
      setRegisterPassword(el.value)
    } else if (el.name == 'password-confirm') {
      setRegisterPasswordConfirm(el.value)
    }





  }

  return (
    <main>
      <section className=''>
        <div className="container-fluid">
          <div className="row">
            <div className="left-column">
              <div className="content">
                <div className="brand">
                  <img src={logoPurple} alt="" />
                  <h1 className='text'> lightRight </h1>
                </div>
                <h2 className="heading"> Social media with customizable figures </h2>
              </div>
            </div>
            <div className="right-column">
              <div className="phone">
                <h2 className='notch'>....</h2>
                <form className='register' onSubmit={handleRegister}>
                  <h4 className="heading">Let's start our journey</h4>
                  <div className="form-group">
                    <input type="text" name='username' onChange={(e) => handleRegisterChange(e.target)} placeholder='Choose Username' value={registerUsername} />
                  </div>
                  <div className="form-group">
                    <input type="text" name='email' onChange={(e) => handleRegisterChange(e.target)} placeholder='Email' value={registerEmail} />
                  </div>
                  <div className="form-group">
                    <input type="password" name='password' onChange={(e) => handleRegisterChange(e.target)} placeholder='Strong Password' value={registerPassword} />
                  </div>
                  <div className="form-group">
                    <input type="password" onChange={(e) => handleRegisterChange(e.target)} name='password-confirm' placeholder='Strong password' value={registerPasswordConfirm} />
                  </div>
                  <div className="form-btn">
                    <button className='register'>  Register </button>
                  </div>
                </form>
                <form action="" className="login d-none"></form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
