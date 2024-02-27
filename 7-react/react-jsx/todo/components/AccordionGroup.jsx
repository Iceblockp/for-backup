import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer: "JavaScript is a programming language that enables...",
      isOpen: true,
    },
    {
      id: 2,
      question: "How do you declare a variable in JavaScript?",
      answer:
        'You can declare a variable using the "var", "let", or "const" keyword...',
      isOpen: false,
    },
    // Add more FAQ entries as needed
  ]);

  const openAccordion = (id) => {
    setFaq(
        faq.map((el) => el.id === id ? { ...el,isOpen: true}: {...el,isOpen:false})
    )
    
  }

  return (
    <div>
      {faq.map((el) => (
        <Accordion
        
          key={el.id}
          id={el.id}
          openAccordion={openAccordion}
          isOpen={el.isOpen}
          question={el.question}
          answer={el.answer}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
