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
    <div className="candy-stat-horizontal">
      <div>
        <div className="candy-label">MINT ADDRESS</div>
        <div className="candy-value">
          <ExplorerLink type="address" address={tokenMint} />
        </div>
      </div>
      {edition && edition !== '0' ? (
        <>
          <div className="candy-stat-horizontal-line" />
          <div>
            <div className="candy-label">EDITION</div>
            <div className="candy-value">{edition}</div>
          </div>
        </>
      ) : null}
      {owner ? (
        <>
          <div className="candy-stat-horizontal-line" />
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
          <div className="candy-stat-horizontal-line" />
          <div>
            <div className="candy-label">Animation URL</div>
            <div className="candy-value">
              <ExplorerLink type="address" address={animation_url} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
