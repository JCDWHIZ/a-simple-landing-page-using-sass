import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/logo.jpg'
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaTwitter} from 'react-icons/fa'

function Footer() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div>
      <div className='Footer'>
       <div className='gridOne' data-aos='fade-up' data-aos-duration='2500' >
            <div className='imgDiv'>
              <img src={img} className='Logo' alt='' />
            </div>

            <p>Your mind should be stronger than your feelings, fly!</p>
            <div className='socialicon flex'>
              <FaFacebook className='icon'/>
              <FaInstagram className='icon'/>
              <FaTwitter className='icon'/>
              <FaGithub className='icon'/>
            </div>
          </div>

          <div className='footerLinks' data-aos='fade-up' data-aos-duration='2500' >
            <span className='linkTitle'>Information</span>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Explore</a>
            </li>
            <li>
              <a href=''>Flight Status</a>
            </li>
            <li>
              <a href=''>Travel</a>
            </li>
            <li>
              <a href=''>Check-In</a>
            </li>
            <li>
              <a href=''>Manage your booking</a>
            </li>
          </div>
          
          <div className='footerLinks' data-aos='fade-up' data-aos-duration='2500' >
            <span className='linkTitle'>Quick Guide</span>
            <li>
              <a href=''>FAQ</a>
            </li>
            <li>
              <a href=''>How to</a>
            </li>
            <li> 
              <a href=''>Features</a>
            </li>
            <li> 
              <a href=''>Baggage</a>
            </li>
            <li> 
              <a href=''>Route Map</a>
            </li>
            <li>
              <a href=''>Our Communities</a>
            </li>
          </div>

          <div className='footerLinks' data-aos='fade-up' data-aos-duration='2500' >
            <span className='linkTitle'>Information</span>
            <li>
              <a href=''>Chauffer</a>
            </li>
            <li>
              <a href=''>Our partners</a>
            </li>
            <li> 
              <a href=''>Features</a>
            </li>
            <li> 
              <a href=''>Destination</a>
            </li>
            <li> 
              <a href=''>Careers</a>
            </li>
            <li>
              <a href=''>Transportion</a>
            </li>
          </div>
     </div>
     <div className='copyRightDiv flex'>
     <p>Courtesy Design | Developed by <a href='https://github/JCDWHIZ' target='_blank' rel="noreferrer">JESSE</a></p>
     </div>
   </div>
  )
}

export default Footer
