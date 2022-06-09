import React, { useState } from 'react';

const Accordion = ({ title, step1, step2, step3, step4, step5, step6, step7, step8}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div><h3 className='carbon-benefits-content d-flex justify-content-between'><div>{title}</div><div>{isActive ? '-': '+' }</div></h3></div>
        
      </div>
      {isActive && 
      <div className="accordion-content carbon-text"><div>{step1} <br/> <br/></div> {step2} <br/> <br/> {step3} <br/> <br/> {step4} <br/> <br/> {step5} <br/> <br/> {step6} <br/> <br/> {step7} <br/> <br/> {step8} </div>}
    </div>
  );
};

export default Accordion;