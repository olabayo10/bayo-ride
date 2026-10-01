import { FaQuoteLeft } from "react-icons/fa";

export default function Team({ image, name, quote, designation }) {
    return (
        <div className="team-card">
            <img src={image} alt={name} className="img-photo" />
            <h3 className="team-name">{name}</h3>
            <span className="team-role">{designation}</span>
            <p className="team-quote">
                <FaQuoteLeft className="team-quote-icon" />
                {quote}
            </p>
        </div>
    )
}