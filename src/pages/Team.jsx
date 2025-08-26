import { useState } from "react"
export default function () {

    const [team, setTeam] = useState(false);
    function handleClick() {
        setTeam(!team)
    }

    return (
        <div className="team-mem">
            {/* if (team === 5 && Team) {
            console.log("good")
            } */}
            <div>
                <p>our team members </p>
                {team && 
                <p>
                    <h5>We are members of 5</h5>
                    <ul><strong>Team lead</strong> -Dada Adebayo</ul>
                    <ul><strong>Head of ICT</strong> -Bola Badru</ul>
                    <ul><strong>Head of advertisement</strong> -Bode Ateru</ul>
                    <ul><strong>Riders</strong> - Joe and george </ul>
                </p>}
            </div>
            <button onClick={handleClick}>
                {team ? "glad you are here" : "know us" }
            </button>
        </div>
    )
}