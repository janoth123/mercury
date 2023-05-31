import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Register2() {
  return (
    <>
     <div className='login2Conatainer'>
        <div>

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
                <button>Sign in with Twitter</button>
                <p style={{color:'black'}}><AiOutlineMail/></p>
              </div>

              <p style={{margin:'50px 0', fontSize:'14px',fontFamily:"inherit",fontWeight:'600',paddingLeft:'20px'}}>Already have an account? <b style={{color:'green',fontWeight:"700"}}><Link to='/Login2' style={{color:'green',textDecoration:'none'}}>Sign in</Link></b></p>
            </div>
          </div> 


          <footer className='footer mt-5'>
            <div>
              <p>Click <Link to='/Register2' class='footer' style={{textDecoration:"none"}}>"Sign Up"</Link> to agree to Medium's <u>Terms of Service</u> and acknowledge that</p>
              <p style={{display:"flex",justifyContent:'center'}}>Medium's <u>Privacy Policy</u> applies to you</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Register2