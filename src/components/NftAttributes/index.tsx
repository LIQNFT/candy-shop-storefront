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
        ) : attributes && attributes.length > 0 ? (
          attributes.map((attribute) => (
            <div className="candy-nft-attribute" key={attribute.trait_type}>
              {attribute.trait_type}: {attribute.value}
            </div>
          ))
        ) : (
          <div className="candy-value">No attributes</div>
        )}
      </div>
      <div className="shareButton">
        <p className="shareText">SHARE: </p>
        <a
          href="https://www.facebook.com/sharer?u=https%3A%2F%2Fwww.homeqube.io%2Fstructural-legacies"
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
          href="https://twitter.com/share?text=See%20our%20various%20structural%20legacies%20from%20our%20Homeqube%20website%20%0A%0Ahttps%3A%2F%2Fwww.homeqube.io%2Fstructural-legacies%0A%0A%23zebrabeatsbear%0A%23design2earn%0A%23build2earn%0A%23manufacture2earn%0A%23utilitytokens%0A%23SolanaNFTs"
          target="_blank"
          rel="noreferrer noopener"
          className="flink-icon"
        >
          <img
            className="share-icon me-2 mx-1"
            src="./icons8-twitter-50.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
