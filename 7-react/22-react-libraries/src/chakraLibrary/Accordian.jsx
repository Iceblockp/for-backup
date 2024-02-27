import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


const Accordian = () => {
  return (
    <div className=' flex flex-col justify-center items-center '>
      <Accordion className=' border border-gray-500'  allowToggle>
        <AccordionItem className=' bg-gray-200 '>
          <AccordionButton _expanded={{bg: 'tomato', color:"blue"}}>
            <h1>Section 1 title</h1>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel className=' border border-yellow-300 '>
            first letter and testing.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h1>Section  title</h1>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            second letter and testing.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h1>Section  title</h1>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            second letter and testing.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h1>Section  title</h1>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            second letter and testing.
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
    </div>
  )
}

export default Accordian