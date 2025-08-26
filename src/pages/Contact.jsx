import { useState } from "react"
export default function Contact () {

    const [contact, setContact] = useState("");
    const [checked, setChecked] = useState(false);


    return (
        // <div>
        //     <p>For more information , contact us at 08133823348 </p>
        //     <button onClick={() => setContact("08133823348")}>show contact</button>
        //     <p>
        //         {contact === "" ? "no contact yet" : `Our number is: ${contact}`}
        //     </p>
        // </div>


        <div className="contact">
            <h2>Contact Us</h2>

                <button onClick={() => setContact("08133823348")}>
                    Use Number 1
                </button>

                <button onClick={() => setContact("08148455678")}>
                    Use Number 2
                </button>

                <button onClick={() => setContact("07030661192")}>
                    Use Number 3
                </button>

                <button onClick={() => setContact("")}>
                    clear
                </button>

                {/* Display */}
                <p>
                    {contact === "" ? "No contact selected" : `Our number is: ${contact}`}
                </p>


                <p>
                    You can also follow us on our instagram page <br />
                    @bayoridelogistics
                </p>
                <label>
                    <input 
                        type="checkbox" 
                        checked = {checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    {checked ? "subscribed" : "not subscribed"}
                </label>
        </div>
    )
}