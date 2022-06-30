import React, { useState } from 'react';


const Accordion = ({ title, step1, step2, step3, step4, step5, step6, step7, step8, state1, state2, state3,state4,state5,state6,state7,state8, statelink, statelink1, statelink2,statelink3,statelink4,statelink5,statelink6,statelink7,statelink8}) => {
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
        <span class={statelink}>&nbsp;
        <a
          href="https://help.phantom.app/hc/en-us/articles/4406388623251-How-to-create-a-new-wallet"
          target="_blank"
          class="blog-link blog-link-underline"
        >
          guide
        </a>
        &nbsp;TO HELP YOU SET UP YOUR WALLET.
        </span>
        <span class={statelink1}>&nbsp;
           <a href="" className="blog-link blog-link-underline">
           form
            </a>
            &nbsp;or email us at about@homeqube.com for your interested in
            posting your collection
        </span>
        <span class={statelink2}>&nbsp;
        <a
          href="https://explorer.solana.com/address/8VzbpTNAJs5b493qNJVqKAjuNAQWFdjrdf1pd9uUKZcB"
          target="_blank"
          class="blog-link blog-link-underline"
        >
          ADDRESS.
        </a>
        
        </span>
        {/* <span class={statelink7}>&nbsp;
        <a
          href="mailto:ABOUT@HOMEQUBE.COM"
          target="_blank"
          class="blog-link blog-link-underline"
        >
          ABOUT@HOMEQUBE.COM 
        </a>
        &nbsp;FOR YOUR INTEREST IN POSTING YOUR COLLECTION
        </span> */}
        <span class={statelink8}>&nbsp;
        <a
          href="https://www.qube.homeqube.com/"
          target="_blank"
          class="blog-link blog-link-underline"
        >
          WWW.QUBE.HOMEQUBE.COM
        </a>
        &nbsp;TO GET MORE DETAILS ABOUT OUR PLATFORM.
        </span> 
        <br/> <br/>
        </div> 
        <div class={state2}> {step2}
        <span class={statelink3}>&nbsp;
        <a
          href="https://explorer.solana.com/"
          target={"_blank"}
          class="blog-link blog-link-underline"
        >
          (HTTPS://EXPLORER.SOLANA.COM/) 
        </a>
        . 
        </span> 
        <span class={statelink4}>&nbsp;
        <a
          href="/mycollection"
          
          class="blog-link blog-link-underline"
        >
          MY COLLECTION  
        </a>
        &nbsp;IN THE NAVIGATION BAR. YOU WILL SEE THE LIST OF NFTS YOU COLLECTED FROM OUR WEBSITE.
        </span> 
        <br/> <br/> 
        </div>
        <div class={state3}> {step3} 
        <span class={statelink5}>&nbsp;
        <a
          href="/claimqubes"
          
          class="blog-link blog-link-underline"
        >
          CLAIM QUBE 
        </a>
        &nbsp;Here
        </span>
        <span class={statelink3}>&nbsp;
        <a
          href="/claimqubes"
          
          class="blog-link blog-link-underline"
        >
          CLAIM QUBE 
        </a>
        . 
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
        <span class={statelink6}>&nbsp;
        <a
          href="mailto:ABOUT@HOMEQUBE.COM"
          target="_blank"
          class="blog-link blog-link-underline"
        >
          ABOUT@HOMEQUBE.COM.
        </a>
    
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