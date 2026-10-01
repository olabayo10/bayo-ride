import { useState } from "react";
import React from "react";
import logo from "../Images/mylogo.png"
import insta from "../Images/instagram-icon.png";
import gmail from "../Images/gmail.png";
import whats from "../Images/wappicon.png";
import {FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt} from "react-icons/fa";

export default function Footer ({author}) {

    return (
        <footer className="footer">
            <div className="foot-main">
                
                <div className="footer-box">
                    <div className="big-logo">
                        <img src={logo} alt="yo" className="footer-logo" />
                    </div>
                    <div className="main-foot">
                        <h2> Main Office</h2>
                        <div className="foot-div">
                            <div FaPhoneAlt className="info">
                                <h4>
                                    <FaPhoneAlt className="icon" />
                                    Call
                                </h4>
                                <p> 08148455678</p>
                            </div>
                            <div FaEnvelope className="info">
                                <h4>
                                    <FaEnvelope className="icon"/>
                                    Email
                                </h4>
                                <p>bayoridelogistics@gmail.com </p>
                            </div>
                            <div FaMapMarkerAlt className="info">
                                <h4>
                                    < FaMapMarkerAlt className="icon"/>
                                    Address
                                </h4>
                                <p> 1, Meekness Road, Redemption City. </p>
                            </div>
                        </div>
                    </div>    
                    <div className="main-foot">
                        <h2> Branch Office</h2>
                        <div className="foot-div">
                            <div FaPhoneAlt className="info">
                                <h4>
                                    <FaPhoneAlt className="icon" />
                                    Call
                                </h4>
                                <p> 08133823348</p>
                            </div>
                            <div FaEnvelope className="info">
                                <h4>
                                    <FaEnvelope className="icon"/>
                                    Email
                                </h4>
                                <p>bayoridelogistics@gmail.com </p>
                            </div>
                            <div FaMapMarkerAlt className="info">
                                <h4>
                                    <FaMapMarkerAlt className="icon"/>
                                    Address
                                </h4>
                                <p> Jaja Complex, UNILAG </p>
                            </div> 
                        </div>
                    </div>   
                    <div className="logo">
                        <div className="wa-logo">
                            <a  href="https://www.instagram.com/bayoridelogistics"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={insta} alt="insta" height={40} className="logo-t"/>
                            </a>
                        </div>
                        <div className="wa-logo">
                            <a href="https://wa.me/+2348133823348"
                            target="_blank"
                            rel="noopener noreferrer"><img src={whats} alt="what" height={30} className="logo-t"/></a>
                        </div>
                        <div className="wa-logo">
                            <a href="mailto:bayorideloistics@gmail.com"><img src={gmail} alt="gmail" height={60} className="logo-t"/></a>
                        </div>
                    </div>   
                </div>  
                
            </div>
            <div className="foot-div2">
                <div>&copy; {new Date().getFullYear()} {author}'s Logistics. All rights reserved.</div>
                <div><small>Designed by {author}</small></div>
            </div>
        </footer>
    )
}