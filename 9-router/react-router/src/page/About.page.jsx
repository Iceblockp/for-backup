import React from 'react'
import {useLocation} from "react-router-dom";

const Aboutpage = () => {
    const { state:{phoneNumber}} = useLocation();
  return (
    <div>Aboutpage {phoneNumber}</div>
  )
}

export default Aboutpage