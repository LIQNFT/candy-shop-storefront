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
      <a href="https://www.facebook.com/sharer?u=https%3A%2F%2Fhqnftrialv2.xyz%2F" target="_blank" rel="noreferrer noopener pt-3" className='flink-icon'>
      <button className="exchange-button-more2 btn rounded-pill m-1" type="button">
           SHARE ON FACEBOOK
     </button>
      </a>

     
     <a href="https://twitter.com/share?url=https://hqnftrialv2.xyz" target="_blank" rel="noreferrer noopener pt-3" className='flink-icon'>
     <button className="exchange-button-more2 btn rounded-pill m-1" type="button">
           SHARE ON TWITTER
     </button>
     </a>
     
         {/* <a
           href="https://www.instagram.com/homeqube.ai/"
           target="_blank"
           rel="noreferrer noopener"
           className="flink-icon"
         >
           <img
             className="footer-icon me-2 mr-1"
             src="./instagram.svg"
             alt=""
           />
         </a>
         <a
           href="https://twitter.com/homeqube_ai"
           target="_blank"
           rel="noreferrer noopener"
           className="flink-icon"
         >
           <img className="footer-icon me-2 mx-1" src="./twitter.svg" alt="" />
         </a> */}
       </div>
    </div>
  );
};
