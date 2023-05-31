import React from 'react'
import { AiFillApple, AiOutlineMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Login2() {
  return (
    <>
      <div className='login2Conatainer'>
        <div>
          <p style={{marginBottom:'40px', fontSize:'30px',fontFamily:'sans-serif',display:'flex',justifyContent:'center'}}>Welcome back.</p>

          <div className='d-flex' style={{justifyContent:'center'}}>
            <div>
              <div className='login2'>
                <button>Sign in with Google</button>
                <p><IoLogoGoogle/></p>
              </div>

              <div className='login2'>
                <button>Sign in with Facebook</button>
                <p style={{color:'blue'}}><IoLogoFacebook/></p>
              </div>

              <div className='login2'>
                <button>Sign in with Apple</button>
                <p style={{color:'black'}}><AiFillApple/></p>
              </div>

              <div className='login2'>
                <button>Sign in with Twitter</button>
                <p style={{color:'blue'}}><BsTwitter/></p>
              </div>

              <div className='login2'>
                <button>Sign in with Twitter</button>
                <p style={{color:'black'}}><AiOutlineMail/></p>
              </div>

              <p style={{margin:'50px ', fontSize:'13px',fontFamily:"inherit",fontWeight:'600'}}>No account? <b style={{color:'green',fontWeight:"700"}}>Create one</b></p>
            </div>
          </div>

          <p className='forgotDetails'>Forgot email or trouble signing in? <u>Get help</u></p>


          <footer className='footer'>
            <div>
              <p>Click <Link to='/Login' class='footer' style={{textDecoration:"none"}}>"Sign in"</Link> to agree to Medium's <u>Terms of Service</u> and acknowledge that</p>
              <p style={{display:"flex",justifyContent:'center'}}>Medium's <u>Privacy Policy</u> applies to you</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Login2