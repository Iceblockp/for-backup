import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount( prev => prev + 1);
        // setCount( prev => prev + 1);
    };
    const decrease = () => {
        if(count > 0){
            setCount( (prev) => prev - 1)
        }
    };

  return <div>
    <div className=" font-mono border border-gray-400 p-10 rounded-xl">
        <h1 className=" font-bold text-4xl mb-5">Counter : {count}</h1>
        <div className=" flex gap-3">
            <button onClick={decrease} className=" bg-sky-50 px-2 py-1 rounded-lg">
                Sub (-)
            </button>
            <button onClick={increase} className=" bg-sky-50 px-2 py-1 rounded-lg">
                Add (+)
            </button>
        </div>
    </div>
  </div>;
};

export default Counter;
