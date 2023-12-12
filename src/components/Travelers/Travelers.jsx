import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/nature1.jpg'
import img2 from '../../assets/nature2.jpg'
import img3 from '../../assets/nature3.jpg'
import img4 from '../../assets/nature4.jpg'

const Traveler = [
  {
    id: 1,
    destinationImage: img,
    travelerImage: img,
    travelerName: 'Jesse',
    sociallink: '@jesse123'
  },
  {
    id: 2,
    destinationImage: img2,
    travelerImage: img2,
    travelerName: 'Fred',
    sociallink: '@freddy799'
  },
  {
    id: 3,
    destinationImage: img3,
    travelerImage: img3,
    travelerName: 'Dalot',
    sociallink: '@KingDalot2'
  },
  {
    id: 4,
    destinationImage: img4,
    travelerImage: img4,
    travelerName: 'Joseph',
    sociallink: '@joseph101k'
  }
];

function Travelers() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500' >Top travelers of this month</h2>

        <div className="travelersContainer grid">

          {
            Traveler.map(({id, destinationImage, travelerImage,travelerName, sociallink})=>{
              return (
                <div key={id} className="singleTraveler" data-aos='fade-down' data-aos-duration='2500' >
                <img src={destinationImage} alt="" className='destinationImage'/>
                <div className="travelerDetails">
                  <div className="travelerImage">
                    <img src={travelerImage} alt="" className='travelerImage'/>
                  </div>
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{sociallink}</p>
                </div>
              </div>
              )
            })
          }
         

        </div>
      </div>
    </div>
  )
}

export default Travelers
