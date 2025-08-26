import { useState } from "react"
export default function About() {

    const [showMore, setShowMore] = useState(false); 
    function handleClick () {
        setShowMore(!showMore)
    }


    return (
        <div className="about-us">
            <h1>About us </h1>
            <p>This is about this page</p>
            {showMore && <p>Extra info about our company...</p>}
            <button onClick={handleClick}>
                {showMore ? "show Less": "Read More"}
            </button>
        </div>
    )
}