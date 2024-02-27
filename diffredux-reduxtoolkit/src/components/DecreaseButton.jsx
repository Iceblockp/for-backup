import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease } from "../store/reducer/count.slice";


const DecreaseButton = () => {
     const dispatch = useDispatch();

     const handleDecrease = () => {
        dispatch(decrease());
     }


  return (
    <div>
      <button onClick={handleDecrease} className=" border border-green-400 bg-green-300 ">
        decrease
      </button>
    </div>
  );
};

export default DecreaseButton;
