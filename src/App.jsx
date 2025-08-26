import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import Goal from "./pages/Goal"
import { useState } from "react"
import React from "react"
import Header from "./Components/Header" 
import Aside from "./Components/Aside"
import Footer from "./Components/Footer"
import Body from "./Components/Body"
import "./style.css"; 


export default function App () {
    const name = "timo";
    const age = 40;
    const school ="Unilag";

    const [menuOpen, setMenuOpen] = useState(false);


    const nono = (
        <main className="about">
            <div className="first-div" id="AboutUs">
                This is bayoride Logistics <br /> located at 1 meekness road , redemption city. Ogun state.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis facere obcaecati provident necessitatibus. Adipisci, accusantium! Cupiditate, voluptas ex voluptate sed eius quo possimus mollitia odit delectus, expedita molestias reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste provident dolorem voluptas nostrum. Libero odit consectetur totam nemo, voluptas aliquid quae fuga, in, facere praesentium dolor id laboriosam nesciunt!
            </div>                            
            <hr />
            <br />
            <div className="second-div" id="contact">
                Contact us at bayoridelogistics at gmail.com 
                you can also reach us on our contact  081333823348
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo, voluptatem minima quaerat nam eligendi porro vitae exercitationem iure ab id harum aliquam fuga nobis, repudiandae tempore nisi unde error!
            </div>
            <br />
            <hr />
        </main>
    );


    return (
        <nav className="new-nav">
            <Router>
                <div className="menu-container">
                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* <nav className="nav-bar">
                        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            &#9776;
                        </button>
                </nav>
                */}

                
                <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <ul className="in-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/team">Our Team</Link></li>
                        <li><Link to="/goal">Our goal</Link></li>
                    </ul>
                </nav>


                
                <section>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <Header/>
                                    {/* <Aside/> */}
                                    <Body data={nono}/>
                                    <Footer Name={name} Age={age} School={school}/>
                                </div> 
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/goal" element={<Goal />} />
                    </Routes>
                </section>   
            </Router>
        </nav>
    )
}