import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/flight.png'
function Lounge() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500' >
          <img src={img} alt="" />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500' >Unaccompanied Minor Lounge</h2>
        <div className="grids grid">
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500' >
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
          </div>
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500' >
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
          </div>
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500' >
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
          </div>
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500' >
            <span className='gridTitle'>
              Chauffer-drive service
            </span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Lounge
