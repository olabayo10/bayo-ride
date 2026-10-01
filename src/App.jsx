import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import WhyChooseUs from "./pages/WhyChooseUs";
import Home from "./pages/Home";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./style.css";
import Data from "./Data";

export default function App() {
    const name = "Bayo";
    const designed = "by me";
    const city = "Lagos";

    return (
        <Router>
            <Header />

            <section>
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route
                        path="/team"
                        element={
                            <section className="team-section">
                                <h1 className="team-title">Meet our team</h1>
                                <p className="team-sub">
                                    The people behind every delivery.
                                </p>

                                <div className="team-grid">
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
                            </section>
                        }
                    />
                </Routes>
            </section>

            <Footer
                author={name}
                pronoun={designed}
                town={city}
            />
        </Router>
    );
}