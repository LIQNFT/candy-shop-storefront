import React from 'react';
import Accordion from './Accordion';

function Faqs() {
    const accordionData = [
        {
          title: 'How to buy NFT from this website?',
          step1: `Step 1: By clicking the 'Connect Wallet', connect your prefered crypto wallet to our marketplace.`,
          step2: `Step 2: On the our website you will see different categories to choose from. Click and you will see the list of the NFTs based on that categories.`,
          step3: `Step 3: Find your prefered NFT. You can also view all of the information of that NFT with their attributes and price. `,
          step4: `Step 4: Then, click the 'Buy Now' button to buy NFT.`,
          step5: `Step 5: Click Approve for the transaction on your wallet.`,
        },
        {
          title: 'How to download your 3d model files?',
          step1: `Step 1: Open your crypto wallet.`,
          step2: `Step 2: On your wallet you will find your collectibles where your NFT is stored.`,
          step3: `Step 3: Click your latest NFT purchased.`,
          step4: `Step 4: Click the '...' on the top right corner of your NFT then click 'View on Solscan'`,
          step5: `Step 5: Once you're on Solscan Website, you will see all of the details and overview on your NFTs. Click the Metadata Tab`,
          step6: `Step 6: Click the View URI Metadata, then you will see all of the metadatas that are stored on  your NFT.`,
          step7: `Step 7: Find the "properties" section then "files", you will now see two different uri's with their types, image/gif and glb, copy the uri of the glb type with no quotations ("") on both sides then paste it to your browser.`,
          step8: `Step 8: The file will automatically download to your computer, then once it's finished you will now renamed it to .glb file. Then you can now view it to your 3d Viewer.`

         
        },
        {
          title: 'How to claim your QUBE?',
          step1: `Step 1: On our website, click the Claim Qube on the Navigation Bar`,
          step2: `Step 2: Paste the Solscan Link and your personal Email Address.`, 
          step3: `You can find the Solscan Link on your crypto wallet, where your latest purchased NFT stored. Click 'View On Solscan', then copy the URL on the top of your browser.`,
          step4: `Step 3: Click the 'Submit' button then wait for our email.`
          
        }
      ];
    return (
        <>
        <section className="benefits-container text-dark text-sm-start">
        <div className="col link d-flex align-items justify-content">
            <div className="container p-3">
                <div className="carbon-content-container-bg">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="container-sm text-uppercase">
                            <h3 className="carbon-benefits-content">
                            Frequently Asked Questions 
                            </h3>
                            <div>
                        
                            <div className="accordion">
                            {accordionData.map(({ title, step1, step2, step3, step4, step5, step6, step7, step8 }) => (
                            <Accordion title={title} step1={step1} step2={step2} step3={step3} step4={step4} step5={step5} step6={step6} step7={step7} step8={step8}/>
                                ))}
                            </div>
                            </div>
                           
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        </>)
}
export default Faqs;