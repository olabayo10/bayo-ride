import React, { useState } from "react";
import rider from '../Images/rider1.jpeg'
import img from '../Images/img-log.jpeg'
import { FaStore, FaTruck, FaBoxes, FaRoute, FaBicycle } from "react-icons/fa"
import { BiPackage } from "react-icons/bi"
import devguy from '../Images/devguy.png'
import aff from '../Images/aff.png'
import prompt from '../Images/prompt.png'
// import { FaCheck } from "react-icons/fa";


export default function About() {

    const [showMore, setShowMore] = useState(false); 
    const handleClick = () => {
        setShowMore(!showMore)
    }


    return (
        <div className="about-us">
            <div className="about-img">
                <img src={rider} alt="ride" className="the-img"/>
                <h1 className="about-head">About Our Company </h1>
            </div>
            <div className="aboutbig-container">
                <div className="boxes">
                    <FaBicycle className="abt-icon"/>
                    <h2 className="text1">3+</h2>
                    <p className="para1">Years of experience</p>
                </div>
                <div className="boxes">  
                    <FaRoute className="abt-icon" />
                    <h2 className="text1"> over 2,500</h2>
                    <p className="para1">clients served</p>
                </div>
                <div className="boxes">
                    <BiPackage className="abt-icon" />
                    <h2 className="text1">5,000</h2>
                    <p className="para1">Succesful deliveries</p>
                </div>
            </div> 
            <div className="about-container">
                <img src={img} alt="about" className="about-body"/>
                <div className="about-page"> 
                    <p>
                        Bayoride Logistics is dedicated to fast and reliable delivery services.
                        We serve businesses and individuals with modern logistics solutions.
                    </p>

                    {showMore && (
                        <p>
                            Since our founding, we have delivered thousands of packages across
                            the country. Our team is focused on customer satisfaction, and we
                            continually expand our reach to serve more clients every day.
                        </p>
                    )}

                    <button onClick={handleClick} className="about-but">
                        {showMore ? "show Less": "Read More"}
                    </button>
                </div>
            </div>
            <div className="about-two">
                <div className="about-two-one">
                    <img src={prompt} alt="pmt" className="img-about-1"  height={220}/>
                    <p className="about-two-p1"> 
                        Prompt delivery service.
                    </p>
                </div>
                <div className="about-two-one">
                    <img src={aff} alt="aff" className="img-about-1" height={220}/>
                    <p className="about-two-p1">
                        Guaranteed Delivery & pickup
                    </p>
                </div>
                <div className="about-two-one">
                    <img src={devguy} alt="img" className="img-about-1" height={220}/>
                    <p className="about-two-p1">
                        Affordable delivery Prices.
                    </p>
                </div>
            </div>
            <div className="exc-us">
                <div className="exc-div">
                    <p className="exc-p">Why choose bayoride?</p>
                    <ul className="exc-ul">
                        <li className="exc-li" >  Fast Delivery Servies</li>
                        <li className="exc-li">   We are affordable</li>
                        <li className="exc-li">   Guaranteed Delivery / Refund</li>
                        <li className="exc-li">  Friendly Customer Services.</li>
                    </ul>
                </div>
                <div className="exc-div-two">
                    <p className="exc-p">Our track record!</p>
                    <ul className="exc-ult">
                        <li className="exc-li"> 2 years being Customers friendly</li>
                        <li className="exc-li"> Massive Customer Base </li>
                        <li className="exc-li"> Readily Available </li>
                        <li className="exc-li"> Safe package, Content & Client</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}