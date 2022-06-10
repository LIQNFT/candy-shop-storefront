import React, { useState } from 'react';


const Accordion = ({ title, step1, step2, step3, step4, step5, step6, step7, step8, state1, state2, state3,state4,state5,state6,state7,state8, statelink, statelink1}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)} style={{cursor:"pointer"}}>
        <div><h2 className='faq-head d-flex justify-content-between'>
          <div>{title}</div>
          
          <div>{isActive ? '▲' : '▼' }</div>
          </h2>
          
        </div>
        
      </div>
      {isActive && 

      <div className="accordion-content carbon-text">
        <div class={state1}>{step1} 
        <span class={statelink}>
        <a
          href="https://help.phantom.app/hc/en-us/articles/4406388623251-How-to-create-a-new-wallet"
          target="_blank"
          class="blog-link"
        >
          &nbsp;guide
        </a></span>
        <span class={statelink1}>
           <a href="" className="blog-link">
           &nbsp;form
            </a>
            &nbsp;or email us at about@homeqube.com for your interested in
            posting your collection
        </span>
        <br/> <br/>
        </div> 
        <div class={state2}> {step2} 
        <br/> <br/> 
        </div>
        <div class={state3}> {step3} 
        <br/> <br/>
        </div>
        <div class={state4}> {step4} 
        <br/> <br/>
        </div>
        <div class={state5}>{step5} 
        <br/> <br/> 
        </div>
        <div class={state6}>{step6} 
        <br/> <br/>
        </div>
        <div class={state7}> {step7} 
        <br/> <br/>
        </div> 
        <div class={state8}>{step8} 
        </div>
        </div>}
    </div>
  );
};

export default Accordion;