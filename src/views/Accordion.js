import React, { useState } from 'react';


const Accordion = ({ title, step1, step2, step3, step4, step5, step6, step7, step8, state1, state2, state3,state4,state5,state6,state7,state8, statelink, statelink3,statelink6, steplink, linkname, othertext, steplink1, linkname1, othertext1, steplink2, linkname2, othertext2,steplink3, linkname3, othertext3}) => {
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

      <div className="accordion-content carbon-text" style={{fontSize: "2rem"}}>
        <div class={state1}>{step1} 
        <span class={statelink}> &nbsp;
        <a
          href={steplink} // steplink
          target="_blank"
          class="blog-link blog-link-underline"
        >
          {linkname}
        </a>
        &nbsp;{othertext}
        </span>
      
        <br/> <br/>
        </div> 
        <div class={state2}> {step2}
        <span class={statelink3}> &nbsp;
        <a
          href={steplink1} // steplink
          target="_blank"
          class="blog-link blog-link-underline"
        >
          {linkname1}
        </a>
        &nbsp;{othertext1}
        </span>
     
        <br/> <br/> 
        </div>
        <div class={state3}> {step3} 
        
        <span class={statelink3}> &nbsp;
        <a
          href={steplink2} // steplink
          target="_blank"
          class="blog-link blog-link-underline"
        >
          {linkname2}
        </a>
        &nbsp;{othertext2}
        </span>
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
        <span class={statelink6}> &nbsp;
        <a
          href={steplink3} // steplink
          target="_blank"
          class="blog-link blog-link-underline"
        >
          {linkname3}
        </a>
        &nbsp;{othertext3}
        </span>
        <br/> <br/>
        </div> 
        <div class={state8}>{step8} 
        </div>
        </div>}
    </div>
  );
};

export default Accordion;


// <a href="mailto:manufacturing@homeqube.com" target="_blank">
//manufacturing@homeqube.com.
//</a>   