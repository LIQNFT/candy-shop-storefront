import React from 'react';
import { ExplorerLink } from '../ExplorerLink';

export interface NftStatProps {
  tokenMint: string;
  edition?: number | string | null;
  owner?: string;
  animation_url?:string;
}

export const NftStat: React.FC<NftStatProps> = ({ tokenMint, edition, owner, animation_url}) => {
  return (
    <div className="candy-stat-horizontal" style={{
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex'
      }}>
      <div>
        <div className="candy-label">MINT ADDRESS</div>
        <div className="candy-value">
          <ExplorerLink type="address" address={tokenMint} />
        </div>
      </div>
      {edition && edition !== '0' ? (
        <>
          <div className="candy-stat-horizontal-line mx-2" />
          <div>
            <div className="candy-label">EDITION</div>
            <div className="candy-value">{edition}</div>
          </div>
        </>
      ) : null}
      {owner ? (
        <>
          <div className="candy-stat-horizontal-line mx-2" />
          <div>
            <div className="candy-label">OWNER</div>
            <div className="candy-value">
              <ExplorerLink type="address" address={owner} />
            </div>
          </div>
        </>
      ) : null}
       {animation_url ? (
        <>
          <div className="candy-stat-horizontal-line mx-2" />
          <div>
            <div className="candy-label">Animation URL</div>
            <div className="candy-value">
              <ExplorerLink type="address" address={animation_url} />
            </div>
          </div>
        </>
      ) : null}
      </div>
      <div className='shareButton'>
      <button className="exchange-button-more2 btn rounded-pill mb-2" type="button">
            SHARE ON FACEBOOK
      </button>
      
      <a href="https://twitter.com/share?url=https://hqnftrialv2.xyz" target="_blank" rel="noreferrer noopener pt-3" className='flink-icon'>
      <button className="exchange-button-more2 btn rounded-pill" type="button">
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
