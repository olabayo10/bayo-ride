import React, { useState } from "react"
import bike from "../Images/bayoride.png"
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact () {
    const [isChecked, setIsChecked] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            alert("please accept the terms and privacy policy.");
            return;
        }

        const response = await fetch("https://formspree.io/f/mblqjlee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setIsChecked(false);
        } else {
            alert("Message failed to send");
        }
    
        console.log("Form submited:", formData);
        };


    return (   
        <div className="contact">
            <img src={bike} alt="bike" className="img-fi"/>
            <div className="contact-div">
                <div className="contact-details">
                    <h2 className="contact-us"> Contact Us!</h2>
                    <div className="contact-item">
                        <h3> Redemption City Office</h3>
                        <ul>
                            <li>
                                <FaPhone className="icon-ph" />
                                <a href="tel:08148455678">08148455678</a>
                            </li>
                            <li>
                                <FaEnvelope className="icon"/>
                                <a href="mailto:bayorideloistics@gmail.com">bayoridelogistics@gmail.com</a>
                            </li>
                            <li>
                                <FaWhatsapp  className="icon" />
                                <a href="https://wa.me/+2348148455678" target="_blank" rel="noopenernoreferrer">   Whatsapp</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt className="icon" />
                                <span> 1, Meekness Road, Redemption City, Ogun State. </span>
                            </li>
                        </ul>  
                    </div>
                    <hr />
                    <br />
                    <div className="contact-item">
                        <h3> Akoka Office</h3>
                        <ul>
                            <li>
                                <FaPhone className="icon-ph" />
                                <a href="tel:08148455678">08133823348</a>
                            </li>
                            <li>
                                <FaEnvelope className="icon"/>
                                <a href="mailto:bayorideloistics@gmail.com">bayoridelogistics@gmail.com</a>
                            </li>
                            <li>
                                <FaWhatsapp  className="icon" />
                                <a href="https://wa.me/+2348148455678" target="_blank" rel="noopenernoreferrer">   Whatsapp</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt className="icon" />
                                <span> Jaja Complex, University of Lagos. </span>
                            </li>
                        </ul>  
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2 className="contact-form-h2">MESSAGE US</h2>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Your Email Address" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required  />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required />
                    </div>

                    <div className="form-group">
                        <textarea 
                            name="message"  
                            id="message" 
                            placeholder="Your Message" 
                            rows="6" 
                            value={formData.message} 
                            onChange={handleChange}></textarea>
                    </div>

                    <div className="checkbox-group">
                        <input 
                            type="checkbox" 
                            id="terms"
                            name="terms"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            required
                        />
                        <label htmlFor="terms">I accept privacy policy</label>
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>  
        </div>
    )
}