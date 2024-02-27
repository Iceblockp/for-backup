import React from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);




  return (
    <div>
     
    </div>
  );
};

export default HomePage;
