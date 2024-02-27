import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IncreaseComponents from "../components/IncreaseComponents";
import DecreaseButton from "../components/DecreaseButton";
import PayloadButton from "../components/PayloadButton";

const HomePage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);




  return (
    <div>
      <div className=" flex justify-center  ">
        <div>{value}</div>
      </div>
      <div className=" flex justify-center gap-5 ">
        <IncreaseComponents />
        <DecreaseButton />
        <PayloadButton/>
      </div>
    </div>
  );
};

export default HomePage;
