import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { WalletModal } from '@/components/WalletModal';
import { Networks } from '@/constant/wallet';
import { NETWORK } from '@/utils/candy-shop';
import { shortenAddress } from '@/utils/helperFunc';
import { useConnection } from '@/hooks/useConnection';
import { useWalletStore } from '@/store/useShopStore';

export const ConnectButton = () => {
  const [visible, setVisible] = useState<boolean>();
  const wallet = useWalletStore((s) => s.wallet);
  const { disconnect } = useConnection();

  const currentNetworkInfo = useMemo(() => {
    return Networks.find((value) => value.network === NETWORK);
  }, []);

  return (
    <>
      <WalletModal key={visible ? 1 : 0} open={visible} setOpen={setVisible} />

      {wallet?.publicKey ? (
        <>
          <ConnectButtonStyle
            className="candy-connection-button"
            type="primary"
            onClick={disconnect}
            icon={
              currentNetworkInfo ? (
                <img
                  src={currentNetworkInfo.icon}
                  alt={`${currentNetworkInfo.name} icon`}
                  className="wallet-adapter-icon"
                />
              ) : null
            }
          >
            {shortenAddress(wallet.publicKey.toString())}
          </ConnectButtonStyle>
        </>
      ) : (
        <ConnectButtonStyle
          className="candy-connection-button"
          type="primary"
          onClick={() => setVisible(true)}
        >
          Connect
        </ConnectButtonStyle>
      )}
    </>
  );
};

const ConnectButtonStyle = styled(Button)`
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  line-height: 50px;
  padding: 6px 24px;
  border-radius: 100px;
  background-color: #4e44ce;
  margin: 0 auto;

  img {
    margin-right: 3px;
  }

  .wallet-adapter-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-left: -4px;
  }
`;
