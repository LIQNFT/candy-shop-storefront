import React from 'react';

interface NftAttributesProps {
  attributes: Array<{ trait_type: string; value: string }> | undefined;
  loading: boolean;
}

export const NftAttributes: React.FunctionComponent<NftAttributesProps> = ({ attributes, loading }) => {
  return (
    <div className="candy-stat">
      <div className="candy-label">ATTRIBUTES</div>
      <div className="candy-attribute-container">
        {loading ? (
          <div className="candy-loading candy-loading-sm" />
        ) : attributes ? (
          attributes.map((attribute) => (
            <div className="candy-nft-attribute" key={attribute.trait_type}>
              {attribute.trait_type}: {attribute.value}
            </div>
          ))
        ) : (
          <div className="candy-value">No attributes</div>
        )}
      </div>
      <div className='shareButton'>
      {/* <a href="https://www.facebook.com/sharer?u=https%3A%2F%2Fhqnftrialv2.xyz%2F" target="_blank" rel="noreferrer noopener pt-3" className='flink-icon'>
      <button className="exchange-button-more2 btn rounded-pill m-1" type="button">
           SHARE ON FACEBOOK
     </button>
      </a>

     
     <a href="https://twitter.com/share?url=https://hqnftrialv2.xyz" target="_blank" rel="noreferrer noopener pt-3" className='flink-icon'>
     <button className="exchange-button-more2 btn rounded-pill m-1" type="button">
           SHARE ON TWITTER
     </button>
     </a> */}
     <p className='shareText'>SHARE: </p>
         <a
           href="https://www.facebook.com/sharer?u=https%3A%2F%2Fwww.homeqube.io%2F"
           target="_blank"
           rel="noreferrer noopener"
           className="flink-icon"
         >
           <img
             className="share-icon me-2 mr-1"
             src="./icons8-facebook-50.svg"
             alt=""
           />
         </a>
         <a
           href="https://twitter.com/intent/tweet?text=WE%20ARE%20SOLANA%20BASED%20NFT%20%E2%80%9CLAUNCHPAD-MARKETPLACE%E2%80%9D%20FOR%20HOME%20MANUFACTURING%2C%20FROM%203D%20PRINTED%20PARTS%2C%20HOME%20DESIGNS%2C%20HOME%20SYSTEM%20ALGORITHMS%2C%20DECORS%2C%20FIXTURES%20FURNITURES%2C%20PROTOTYPES%2C%20AND%20RELATED%20OTHERS%20TO%20HOMEBUILDING%20BOTH%20FOR%20THE%20METAVERSE%20AND%20IRL.%0A%0AVISIT%20https%3A%2F%2Fwww.homeqube.io%2F"
           target="_blank"
           rel="noreferrer noopener"
           className="flink-icon"
         >
           <img className="share-icon me-2 mx-1" src="./icons8-twitter-50.svg" alt="" />
         </a>
       </div>
    </div>
  );
};
