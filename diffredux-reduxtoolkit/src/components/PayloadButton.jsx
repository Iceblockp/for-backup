import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { payload } from "../store/reducer/count.slice";


const PayloadButton = () => {
     const dispatch = useDispatch();

     const handleDecrease = () => {
        dispatch(payload(5))
     }


  return (
    <div>
      <button onClick={handleDecrease} className=" border border-green-400 bg-green-300 ">
        IncreasePayload 5
      </button>
    </div>
  );
};

export default PayloadButton;
