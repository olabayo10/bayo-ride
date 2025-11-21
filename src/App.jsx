import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import React from "react"
import Header from "./Components/Header" 
import Aside from "./Components/Aside"
import Footer from "./Components/Footer"
import Body from "./Components/Body"
import "./style.css"; 
import logis from "./Images/logis.jpg"
import { FaStore, FaTruck, FaBoxes, FaBiking, FaBicycle } from "react-icons/fa"
import { BiPackage } from "react-icons/bi"
import zendit from "../src/Images/zendit.png"
import Data from "./Data"


export default function App () {
    const name = "Bayo";
    const designed = "by me";
    const city ="Lagsidi";

    const nono = (
        <main className="home-cont">
            <div className="img-container">
                <div className="theimg">
                    <img src={logis} alt="carrier"/>
                </div>
                <div className="text-img">
                    <p className="img-text">WELCOME TO BAYORIDE LOGISTICS</p>
                    <p className="image-text"> logistics at your doorstep</p>
                </div>
                <div className="stats">
                    <div className="box">
                        <h2 className="box-newh2"> 1000 </h2>
                        <p className="box-newp">Clients Reached</p>
                    </div>
                    <div className="box">
                        <h2 className="box-newh2">500</h2>
                        <p className="box-newp">deliveries done in past 3 months</p>
                    </div>
                    <div className="box">
                        <h2 className="box-newh2">2000 </h2>
                        <p className="box-newp">delivered in 2024</p>
                    </div>
                </div>  
            </div>
            <div className="new-about">
                <h3 className="about-h3">ABOUT US </h3>
                <h1 className="about-h1">Making logistics easier & affordable for You </h1>
                <p>
                    We are a logistics company dedicated to making deliveries easy and reliable. with thousands of clients served , we bring logistics to your doorstep.
                </p>
                <Link to="/about">
                    <button className="about-button">Read More</button>
                </Link>
            </div>
            <div className="div-why">
                <div className="why-div">
                    <h3 className="why-h3">WHY CHOOSE US ?</h3>
                    <h2 className="why-h2">You would probably enjoy the best of service </h2>
                    <ul className="why-list"> 
                        <li className="why-li">Fast delivery Service.</li>
                        <li className="why-li">Very affordable.</li>
                        <li className="why-li">Guaranteed Delivery.</li>
                        <li className="why-li">Best Customer Service.</li>
                    </ul>
                </div>
                <div className="why-div-two">
                    <div className="why-div-circle">
                        <p className="why-div-pa">Bayoride !</p>
                        <h2 className="why-div-hh2">logistics at Your doorstep</h2>
                    </div>
                </div>
            </div>
            <div className="ser-div">
                <h3 className="ser-h2">OUR SERVICES</h3>
                <ul className="ser-list">
                    <li className="ser-li1">
                        <h1><BiPackage className="ser-icon" /></h1>
                        <h2>Door - door delivery services</h2>
                        <h4> Effective home delivery services connecting customers and clients with ease</h4>
                    </li>
                    <li className="ser-li2">
                        <h1><FaBiking className="ser-icon" /></h1>
                        <h2>Express Delivery services</h2>
                        <h4>Attending to very urgent deliveries and making sure it is delivered promptly  </h4>
                    </li>
                    <li className="ser-li3">
                        <h1><FaStore className="ser-icon" /></h1>
                        <h2>Store Keeping </h2>
                        <h4>Unavailability is not a problem , we have a stopre to keep your package/ item pending till you are available to pick it up</h4>
                    </li>
                    <li className="ser-li4">
                        <h1><FaTruck className="ser-icon" /></h1>
                        <h2>Inter-State Delivery Services</h2>
                        <h4>We travel to different States of the Nation and have a park where you can pick up your goods </h4>
                    </li>
                </ul>
            </div>
            <div className="par-div">
                <h2 className="par-h2">Our Partner</h2>
                <img src={zendit} alt="xend" className="par-imge" />
            </div>
        </main>
    );
    


    return (
        <Router>
            <Header/>
            <section>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Body data={nono}/>
                            </div> 
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" 
                        element={
                            <div className="team-section">
                                <p className="team-mem">OUR TEAM MEMBERS</p>
                                <div className="team-cards">
                                    {Data.map(list => (
                                        <Team
                                            key={list.name}
                                            image={list.image}
                                            name={list.name}
                                            designation={list.designation}
                                            quote={list.quote}
                                        />
                                    ))}
                                </div>
                            </div> 
                        }
                    />
                </Routes>
            </section>   
            <Footer author={name} pronoun={designed} town={city}/>
        </Router>
    )
}