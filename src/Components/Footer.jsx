import { useState } from "react";
import React from "react";
import logo from "../Images/mylogo.png"
import insta from "../Images/instagram-icon.png";
import gmail from "../Images/gmail.png";
import whats from "../Images/wappicon.png";
import {FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt} from "react-icons/fa";

export default function Footer ({author}) {

    return (
        <footer className="footer">
            <div className="foot-main">
                <div className="foot-red">
                    <div className="big-logo">
                        <img src={logo} alt="yo" height={100} />
                    </div>
                    <div className="main-foot-logo">
                        <h3 className="foot-h3"> Main Office</h3>
                        <p className="p-foot">Reach our customer service via <br/>
                            <strong><a href="tel:08148455678">08148455678</a></strong>
                        </p>
                        <p className="p-foot">For further equiries contact us at <br />
                            <strong> <a href="mailto:bayorideloistics@gmail.com">bayoridelogistics@gmail.com</a></strong> 
                        </p>
                        <p className="p-foot"> Redemption City Office <br />
                            <strong><span> 1, Meekness Road,Redemption City. </span></strong> 
                        </p>
                    </div>
                </div>
                <div className="foot-blue">
                    <div className="branch">
                        <h3 className="foot-h3"> Branch Office</h3>
                        <p className="p-foot">Reach Us at  <br/>
                            <strong><a href="tel:08133823348">08133823348</a></strong>
                        </p>
                        <p className="p-foot">Further information contact us at <br/>
                            <strong> <a href="mailto:bayorideloistics@gmail.com">bayoridelogistics@gmail.com</a></strong>
                        </p>
                        <p className="p-foot"> Lagos Office <br/>
                            <strong> <span> Jaja Complex, University of Lagos. </span></strong> 
                        </p> 
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
                <div>&copy; {new Date().getFullYear()} {author}'s Logistics. All rights reserved</div>
                <div><small>designed by {author}</small></div>
            </div>
        </footer>
    )
}