import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Suscribers() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='suscribe section' data-aos='fade-up' data-aos-duration='2500' >
      <div className="sectionContainer container">
        <h2>Suscribe to our Newsletters & latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address..'/>
          <button className='btn'>Suscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Suscribers
