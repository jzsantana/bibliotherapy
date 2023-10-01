import React from 'react'
import Proud from '../assets/proud-book.jpg'
import { IoIosArrowForward } from "react-icons/io";
import './BannerHome.css'

const BannerHome = () => {
  return (
    <div className="container-principal-banner">
        <div className='container-text-banner'>
            <h1>Explore, <span>encontre conforto nas páginas &</span> <br></br> mergulhe em histórias acolhedoras <br></br> </h1>
            <button className='btn-home-banner'>Explore nossos produtos <IoIosArrowForward /> </button>
        </div>

        <div className="container-foto-banner">
            <img src={Proud} alt="" />
        </div>
    </div>
  )
}

export default BannerHome