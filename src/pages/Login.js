import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/mediumLogo.png'
import MyContext from './MyContext'

function Login() {
  const { validate, setValidate } = useContext(MyContext)
  // const [value, setValue] = useState({user_name: "", user_password: ""})

  const [user_name, setUserName] = useState("")
  const [user_pass, setUserPass] = useState("")

  // const [check, setCheck] = useState(false)

  // const user_name = ""
  // const user_pass = ""

  // if(user_name ==='' || user_pass === ''){
  //   setValidate(true)
  // }else{
  //   console.log("what")
  // }

  return (
    <>
      <div className="loginContainer">
        <div className="loginContent">
          {/* <p>Welcome back.</p> */}
          <div className='loginHeader'>
            <Link className='link' to='/'>
              <img className='logo' src={logo} alt='logo' />
              <div className='logoName'>Medium</div>
            </Link>
          </div>


          <input value={user_name} onChange={(e) => setUserName(e.target.value)}  type="text" placeholder='Username'  />
          {validate && user_name === "" ? <span>Field is required</span> : null}
          <div>
            <input value={user_pass} onChange={(e) => setUserPass(e.target.value)}   type="password" placeholder='Password'  minLength={4} maxLength={16}/>
          {validate && user_pass === "" ? <span>Field is required</span> : null}

          </div>
          

          <button className="btnUserLogin">Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Login