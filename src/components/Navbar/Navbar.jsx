import React,{useState} from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import img from '../../assets/logo.jpg'

function Navbar() {


const [active, setActive] = useState('navBarMenu')
const ShowNavbar = () =>{
  setActive('navBarMenu showNavBar')
}
const removeNavbar = () =>{
  setActive('navBarMenu')
}

const [noBg, addBg] = useState('navBarTwo')
const addBgColor = () =>{
  if(window.scrollY >= 10){
    addBg('navBarTwo navbar_with_Bg')
  }else{
    addBg('navBarTwo')
  }
}
window.addEventListener('scroll', addBgColor)
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>

        <div className="none flex">
        <li className="flex"> <BsPhoneVibrate /> Support</li>
        <li className="flex"> <AiOutlineGlobal /> languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={img} alt="" className="Logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li  onClick={removeNavbar}className="listItem">Home</li>
            <li  onClick={removeNavbar}className="listItem">About</li>
            <li  onClick={removeNavbar}className="listItem">Offers</li>
            <li  onClick={removeNavbar}className="listItem">Seats</li>
            <li  onClick={removeNavbar}className="listItem">Destinations</li>
          </ul>

          <button  onClick={removeNavbar}className="btn flex btnOne">
            Contact
          </button>
        </div>
        <div className="toggleIcon" onClick={ShowNavbar}>
            <FaBars className="icon"/>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
