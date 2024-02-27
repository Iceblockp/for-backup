import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

const Contactpage = () => {
    const nav = useNavigate();
    const {state} = useLocation();
    const handleBack = () => {
        nav(-1);
    }
  return (
    <div>
        <p>Contack</p>
        <button className=' p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200' onClick={handleBack}>Back</button>
        <p>{state?.name}</p>
    </div>
  )
}

export default Contactpage