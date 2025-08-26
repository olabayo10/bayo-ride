import { useState } from "react"
import React from "react"
export default function Footer ({ Name, Age, School }) {

    return (
        <footer className="foot">
            <p><strong>Founder:</strong> {Name}</p>
            <p><strong>Age:</strong> {Age}</p>
            <p><strong>Alma Mater:</strong> {School}</p>
            <p>&copy; {new Date().getFullYear()} {Name}'s Logistics. All rights reserved</p>
        </footer>
    )
}