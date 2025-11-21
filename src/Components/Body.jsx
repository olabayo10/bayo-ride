import { useState } from "react"
import React from "react"
export default function Body (props) {

   const [darkMode, setDarkMode] = useState(false);
   function handleClick () {
      setDarkMode(!darkMode)
   }


   return (
      <div className="body">
         {props.data}
      </div>
   ) 
}