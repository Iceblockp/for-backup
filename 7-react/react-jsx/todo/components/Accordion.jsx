import React, { useState } from "react";

const Accordion = ({id,openAccordion,question,answer,isOpen}) => {
  const [open, setOpen] = useState(false);
 



  return (
    <div>
      <div onClick={()=> openAccordion(id)}  className=" mb-2 flex justify-between bg-gray-200 select-none">
        <h3>{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-6 w-6 duration-500 ${open && "-rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={`p-4 animate__animated animate__fadeIn`}>
          <p>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
