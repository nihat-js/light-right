import './index.scss'
import logoPurple from '../assets/svg/logo-purple.svg'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useReducer, useRef } from 'react'

export default function Register() {

  const registerUrl = "http://localhost:1000/register"

  const [registerUsername, setRegisterUsername] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [activeForm, setActiveForm] = useState('signup')


  const loginUsername = useRef()
  const loginPassword = useRef()


  const navigate = useNavigate()
  // navigate('/home')

  const handleRegister = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios.post(registerUrl, {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    }).then(res => {
      console.log(res)
      if (res.data.errorCode == '') {
        document.cookie = `_nt=${res.data._nt};`
      }
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('started')
    const response = await axios.post('http://localhost:1000/api/login', {
      username: loginUsername.current.value,
      password: loginPassword.current.value
    })
    document.cookie = response.data
    navigate('/home')

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

  const registerJSX = () => {
    return (
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
        <div className="form-link">
          <p onClick={() => setActiveForm('login')} > I have an account </p>
        </div>
        <div className="form-btn">
          {isLoading ? <span className='spinner'> </span> : <button className='register'>  Register </button>}

        </div>
      </form>
    )
  }
  const loginJSX = () => {
    return (
      <form className='register' onSubmit={handleLogin}>
        <h4 className="heading">Let's start our journey</h4>
        <div className="form-group">
          <input ref={loginUsername} type="text" name='username' placeholder='Username or phone number' />
        </div>
        <div className="form-group">
          <input ref={loginPassword} type="password" name='password' placeholder='Password' />
        </div>

        <div className="form-btn">
          {isLoading ? <span className='spinner'> </span> : <button className='register'>  Login </button>}

        </div>
      </form>
    )

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
                {activeForm == 'login' ? loginJSX() : registerJSX()}
                <form action="" className="login d-none"></form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
