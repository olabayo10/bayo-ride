import { useState } from "react"
export default function Team (props) {


    return (
        <div className="team-card">
            <img src={props.image} alt="img"  className="img-photo"/>
            <p> <strong>Name:</strong> {props.name}</p>
            <p> <strong>Fav quotes:</strong> {props.quote}</p>
            <p> <strong>Designation: </strong>{props.designation} </p>
        </div>
    )
}