import React, { useState } from "react";
import rider from '../Images/rider1.jpeg'
import img from '../Images/img-log.jpeg'
import { FaRoute, FaBicycle, FaCheckCircle } from "react-icons/fa"
import { BiPackage } from "react-icons/bi"
import devguy from '../Images/devguy.png'
import aff from '../Images/aff.png'
import prompt from '../Images/prompt.png'

export default function About() {
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => setShowMore(!showMore);

    return (
        <div className="about-us">
            <div className="about-img">
                <img src={rider} alt="ride" className="the-img" />
                <h1 className="about-head">About Our Company</h1>
            </div>

            <div className="aboutbig-container">
                <div className="boxes">
                    <FaBicycle className="abt-icon" />
                    <h2 className="text1">3+</h2>
                    <p className="para1">Years of experience</p>
                </div>
                <div className="boxes">
                    <FaRoute className="abt-icon" />
                    <h2 className="text1">2,500+</h2>
                    <p className="para1">Clients served</p>
                </div>
                <div className="boxes">
                    <BiPackage className="abt-icon" />
                    <h2 className="text1">5,000</h2>
                    <p className="para1">Successful deliveries</p>
                </div>
            </div>

            <div className="about-container">
                <img src={img} alt="about" className="about-body" />
                <div className="about-page">
                    <h2>Who we are</h2>
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
                        {showMore ? "Show less" : "Read more"}
                    </button>
                </div>
            </div>

            <div className="about-two">
                <div className="about-two-one">
                    <img src={prompt} alt="Prompt delivery" className="img-about-1" />
                    <p className="about-two-p1">Prompt delivery service</p>
                </div>
                <div className="about-two-one">
                    <img src={aff} alt="Guaranteed delivery and pickup" className="img-about-1" />
                    <p className="about-two-p1">Guaranteed delivery and pickup</p>
                </div>
                <div className="about-two-one">
                    <img src={devguy} alt="Affordable prices" className="img-about-1" />
                    <p className="about-two-p1">Affordable delivery prices</p>
                </div>
            </div>

            <div className="exc-us">
                <div className="exc-div">
                    <p className="exc-p">Why choose Bayoride?</p>
                    <ul className="exc-ul">
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Fast delivery services</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />We are affordable</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Guaranteed delivery or refund</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Friendly customer service</li>
                    </ul>
                </div>
                <div className="exc-div-two">
                    <p className="exc-p">Our track record</p>
                    <ul className="exc-ult">
                        <li className="exc-li"><FaCheckCircle className="exc-check" />3+ years of friendly service</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Massive customer base</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Readily available</li>
                        <li className="exc-li"><FaCheckCircle className="exc-check" />Safe package, content and client</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}