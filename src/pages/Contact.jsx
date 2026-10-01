// import React, { useState } from "react";
// import bike from "../Images/bayoride.png";
// import { Link } from "react-router-dom";

// import {
//     FaEnvelope,
//     FaMapMarkerAlt,
//     FaPhone,
//     FaWhatsapp,
// } from "react-icons/fa";

// export default function Contact() {
//     const [isChecked, setIsChecked] = useState(false);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });

//     const offices = [
//         {
//             name: "Redemption City Office",
//             phone: "08148455678",
//             address: "1, Meekness Road, Redemption City, Ogun State.",
//         },
//         {
//             name: "Akoka Office",
//             phone: "08133823348",
//             address: "Jaja Complex, University of Lagos.",
//         },
//     ];

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!isChecked) {
//             alert("Please accept the terms and privacy policy.");
//             return;
//         }

//         try {
//             const response = await fetch(
//                 "https://formspree.io/f/mblqjlee",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 }
//             );

//             if (response.ok) {
//                 alert("Message sent successfully!");

//                 setFormData({
//                     name: "",
//                     email: "",
//                     subject: "",
//                     message: "",
//                 });

//                 setIsChecked(false);
//             } else {
//                 alert("Message failed to send.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Something went wrong. Please try again.");
//         }
//     };

//     return (
//         <div className="contact">
//             <img
//                 src={bike}
//                 alt="Bayoride delivery bike"
//                 className="img-fi"
//             />

//             <div className="contact-div">
//                 <div className="contact-details">

//                     <h2 className="contact-us">
//                         Contact Us!
//                     </h2>

//                     {offices.map((office, index) => (
//                         <React.Fragment key={office.name}>

//                             <div className="contact-item">

//                                 <h3>{office.name}</h3>

//                                 <ul>
//                                     <li>
//                                         <FaPhone className="icon-ph" />

//                                         <a href={`tel:${office.phone}`}>
//                                             {office.phone}
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <FaEnvelope className="icon-ph" />

//                                         <a href="mailto:bayoridelogistics@gmail.com">
//                                             bayoridelogistics@gmail.com
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <FaWhatsapp className="icon-ph" />

//                                         <a
//                                             href="https://wa.me/2348148455678"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             WhatsApp
//                                         </a>
//                                     </li>

//                                     <li>
//                                         <FaMapMarkerAlt className="icon-ph" />

//                                         <span>{office.address}</span>
//                                     </li>

//                                 </ul>

//                             </div>
//                             {index < offices.length - 1 && <hr />}

//                         </React.Fragment>
//                     ))}

//                 </div>


//                 <form
//                     className="contact-form"
//                     onSubmit={handleSubmit}
//                 >

//                     <h2 className="contact-form-h2">
//                         MESSAGE US
//                     </h2>


//                     <div className="form-group">
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             placeholder="Your Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Your Email Address"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="text"
//                             id="subject"
//                             name="subject"
//                             placeholder="Subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <textarea
//                             id="message"
//                             name="message"
//                             placeholder="Your Message"
//                             rows="6"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="checkbox-group">

//                         <input
//                             type="checkbox"
//                             id="terms"
//                             name="terms"
//                             checked={isChecked}
//                             onChange={(e) =>
//                                 setIsChecked(e.target.checked)
//                             }
//                             required
//                         />

//                         <label htmlFor="terms">
//                             I accept the privacy policy
//                         </label>

//                     </div>

//                     <button
//                         type="submit"
//                         className="submit-btn"
//                     >
//                         Submit
//                     </button>

//                 </form>

//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import bike from "../Images/bayoride.png";

import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
    const [isChecked, setIsChecked] = useState(false);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null); // null | "success" | "error"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const offices = [
        {
            name: "Redemption City Office",
            phone: "08148455678",
            whatsapp: "2348148455678",
            address: "1, Meekness Road, Redemption City, Ogun State.",
        },
        {
            name: "Akoka Office",
            phone: "08133823348",
            whatsapp: "2348133823348",
            address: "Jaja Complex, University of Lagos.",
        },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        setSending(true);

        try {
            const response = await fetch("https://formspree.io/f/mblqjlee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setIsChecked(false);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contact">
            <div className="contact-banner">
                <img
                    src={bike}
                    alt="Bayoride delivery bike"
                    className="img-fi"
                />
                <div className="contact-banner-text">
                    <h1>Get in touch</h1>
                    <p>
                        Questions, quotes or pickups? Message us or call an
                        office near you.
                    </p>
                </div>
            </div>

            <div className="contact-div">
                <div className="contact-details">
                    <h2 className="contact-us">Contact us</h2>

                    {offices.map((office, index) => (
                        <React.Fragment key={office.name}>
                            <div className="contact-item">
                                <h3>{office.name}</h3>
                                <ul>
                                    <li>
                                        <FaPhone className="icon-ph" />
                                        <a href={`tel:${office.phone}`}>
                                            {office.phone}
                                        </a>
                                    </li>
                                    <li>
                                        <FaEnvelope className="icon-ph" />
                                        <a href="mailto:bayoridelogistics@gmail.com">
                                            bayoridelogistics@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <FaWhatsapp className="icon-ph" />
                                        <a
                                            href={`https://wa.me/${office.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp
                                        </a>
                                    </li>
                                    <li>
                                        <FaMapMarkerAlt className="icon-ph" />
                                        <span>{office.address}</span>
                                    </li>
                                </ul>
                            </div>
                            {index < offices.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2 className="contact-form-h2">Message us</h2>

                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            aria-label="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email address"
                            aria-label="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            aria-label="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            aria-label="Your message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
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
                        <label htmlFor="terms">
                            I accept the privacy policy
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={sending}
                    >
                        {sending ? "Sending…" : "Send message"}
                    </button>

                    {status === "success" && (
                        <p className="form-status success">
                            Message sent. We'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="form-status error">
                            Message failed to send. Please try again or call us.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}