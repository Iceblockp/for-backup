import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Homepage = () => {
    const [text,setText] = useState("");

    const nav = useNavigate();
    const handleToContact = () => {
        nav("/contact",{replace: true});
    }
    const handleDataTransfer = (event) => {
        event.preventDefault();
        nav("/contact", {state: {name:text}});
        console.log(text);

    }
  return (
    <div>
        <p>Home</p>
        <button  onClick={handleToContact} className=' p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200 '>Next to Contact</button>

        <form >
            <label htmlFor="name">name</label>
            <input type="text" className=' border-2 flex flex-col w-[300px] ' value={text} onChange={(e) => setText(e.target.value) } />
            <button className=' text-white bg-black px-6 py-2 ' onClick={handleDataTransfer} >Go</button>
        </form>

    </div>
  )
}

export default Homepage