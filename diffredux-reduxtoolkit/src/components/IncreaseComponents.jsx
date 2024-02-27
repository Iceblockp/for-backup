import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increase } from '../store/reducer/count.slice';


const IncreaseComponents = () => {

    const dispatch = useDispatch();

const handleIncrease = () => {
    dispatch(increase());
}



  return (
    <div>
        <button onClick={handleIncrease} className=' border border-green-400 bg-green-300 '>increase</button>
    </div>
  )
}

export default IncreaseComponents