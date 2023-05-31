import img from '../img/mediumLogo.png'
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
function Write() {
  return (
    <>
      <div className='container'>
       <div className='d-flex cnt1 gap-2'>
         <Link to='/Dashboard' className='Link'>
          <img src={img} alt="" />
         </Link>
         <p>Draft in Samueljonathan</p>
       </div>

       <div className="cnt2 ">
        <button className="publish">Publish</button>
        <p><IoEllipsisHorizontalSharp/></p>
        <p><IoIosNotificationsOutline/></p>
        <img src="https://cdn-images-1.medium.com/fit/c/32/32/0*zALaHF2sBsCsi5TB" alt="" />
       </div>
      </div>

      <div className='writeContent mt-5'>
       <div className='sec1'>
        <p style={{fonstSize:'20px',color:'#b1aeae'}}><IoMdAddCircleOutline/> </p>
       </div>

       <div className='sec2' style={{borderRight:'2px solid '}}></div>

        <div className="sec3">
         <input  type="text" placeholder='Tell your story..'/>
        </div>
      </div>
    </>
  )
}

export default Write