import React, { useState } from 'react'

const Checker = () => {
const [done , setDone] = useState(false);
const handleInput = () => {
    setDone(!done);
    
}
console.log(done);

  return (
    <div>
        <h1 className=" mb-5">name Input</h1>
        <div className=' flex items-center gap-3'>
        <input checked={done} onChange={handleInput} type="checkbox" id='x' className=' w-6 h-6' />
        <label htmlFor="x" className=' text-2xl cursor-pointer select-none'>Check Me</label>

        </div>
    </div>
  )
}

export default Checker