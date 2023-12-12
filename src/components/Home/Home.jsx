import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video from '../../assets/video.mp4'

function Home() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  


  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>

        <div className="homeImages flex" data-aos='fade-down' data-aos-duration='2500' >
          <div className="videoDiv">
            <video src={video} className='video' autoPlay muted loop></video>
          </div>

          <img src='' alt="" className='plane'/>
        </div>
      </div>
    </div>
  )
}

export default Home
