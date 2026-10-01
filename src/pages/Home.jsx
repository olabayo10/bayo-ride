import WhyChooseUs from "./WhyChooseUs";
import { Link } from "react-router-dom";
import { BiPackage } from "react-icons/bi";
import logis from "../Images/logis.png";
import zendit from "../Images/zendit.png";
import { FaTruck, FaShieldAlt, FaMapMarkedAlt, FaHeadset, FaStore, FaBiking,  } from "react-icons/fa";

export default function Home() {
    const features = [
        {   
            icon: FaTruck,
            title:"Fast Delivery",
            tag: "On Time, Always",
            color: "navy"
        }, 
        {   
            icon: FaShieldAlt,
            title:"Secure Handling",
            tag:"Your Goods, Our Priority",
            color: "gold"
        }, 
        {
            icon: FaMapMarkedAlt,
            title:"Nationwide Coverage",
            tag:"Across Nigeria",
            color:"navy"
        },
        {
            icon: FaHeadset,
            title:"Dedicated Support",
            tag:"We're Here for You",
            color: "gold"
        }
    ]

    const values = [
        {
            quantity: "2600+",
            value: "Clients reached so far"
        },
        {
            quantity: "600+",
            value: "deliveres in the last 3 months"
        },
        {
            quantity: "1600+",
            value: "Items delivered in 2026"
        },

    ]

    const services = [
        {
            icon: BiPackage,
            subhead: "Door-to-Door Delivery Services",
            story: "Effective home delivery services connecting customers and clients with ease"
        },
        {
            icon: FaBiking,
            subhead: "Express Delivery Services",
            story: "Handling urgent deliveries and ensuring they are delivered promptly."
        },
        {
            icon: FaTruck,
            subhead: "Inter-State Delivery Services",
            story: " We travel to different states across the nation and have parks where you can pick up your goods."
        }
    ]

    return (
        <main className="main-div">
            <section className="hero">
                <div className="hero-text">
                    <h4>Delivered <span>to Your Door</span> </h4>
                    <p className="hero-lead">
                        Fast, affordable and dependable delivery services across Nigeria
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="hero-btn hero-btn--primary">Ship now</Link>
                        <Link to="/contact" className="hero-btn hero-btn--ghost">Get a price</Link>
                    </div>
                </div>
                <img className="hero-photo" src={logis} alt="A Bayoride driver handing packages to a customer" />
            </section>
            <section className="feature-row">
                {features.map(({ icon: Icon, title, tag, color})=> (
                    <div className="feature" key={title}> 
                        <Icon className="feature-icon" aria-hidden="true"/>
                        <h4>{title}</h4>
                        <p>{tag}</p>
                    </div>
                ))}
            </section>
            <section className="stat-band">
                {values.map(({ quantity, value }, index) => (
                    <div className="box" key={index}>
                        <b>{quantity}</b>
                        <span>{value}</span>
                    </div>
                ))}
            </section>
            <section className="about-sec">
                <small>ABOUT US</small>

                <h2>
                    Making logistics easier &amp; affordable for You
                </h2>
                <p>
                    We are a logistics company dedicated to making deliveries
                    easy and reliable. With thousands of clients served, we
                    bring logistics to your doorstep.
                </p>
                <Link to="/about" className="about-link"> Read More </Link>
            </section>

            <section className="svc-sec">
                <h2>Our Services</h2>
                <div className="svc-cards">
                    {services.map(({icon: Icon, subhead, story}, index) => (
                        <div className="svc-card" key={index}>
                            <div className="svc-icon">
                                <Icon/>
                            </div>
                            <div>
                                <h3>{subhead}</h3>
                                <p>{story}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <WhyChooseUs />

            <div className="partner-sec">
                <h2>Our Partner</h2>
                <div className="partner-card">
                    <img src={zendit} alt="Xendit"/>
                </div>   
            </div>
        </main>
    );
}