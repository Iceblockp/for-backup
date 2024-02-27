import React, { useState } from 'react'

const Input = () => {

  const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div>
        <h1 className=" mb-5">Text Input</h1>
        <input value={text} onChange={handleInput} type="text" className=' border-2 w-full border-gray-400 py-1 px-3' />

        <p >{text}</p>
    </div>
  )
}

export default Input