import React, { FC, MouseEvent } from 'react';
import { Button, Menu, ModalProps } from 'antd';
import { Blockchain } from '@liqnft/candy-shop-types';
import { ModelContainer } from './styles';
import { WalletName, WalletsSupport } from '@/constant/wallet';
import { NETWORK } from '@/utils/candy-shop';
import { getBlockchain } from '@/utils/shop';
import { useConnection } from '@/hooks/useConnection';

export interface WalletModalProps extends ModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const WalletModal: FC<WalletModalProps> = ({ onCancel, open, setOpen }) => {
  const { connect } = useConnection();

  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    if (onCancel) onCancel(event);
    if (!event.defaultPrevented) setOpen(false);
  };

  const onClickNetwork = (walletName: WalletName, network: Blockchain) => () => {
    connect(walletName, network).then(() => {
      setOpen(false);
    });
  };

  const blockchain = getBlockchain(NETWORK);

  return (
    <ModelContainer
      className="wallet-model"
      title="Select your wallet"
      centered={true}
      onCancel={handleCancel}
      footer={null}
      width={320}
      open={open}
    >
      <Menu mode="inline">
        {blockchain &&
          WalletsSupport[blockchain].map((wallet) => (
            <Menu.Item className="wallet-adapter-modal-menu-item">
              <Button
                onClick={onClickNetwork(wallet.name, NETWORK)}
                icon={
                  wallet.icon ? (
                    <img
                      src={wallet.icon}
                      alt={`${wallet.name} icon`}
                      className="wallet-adapter-icon"
                    />
                  ) : null
                }
                type="text"
                className="wallet-adapter-modal-menu-button"
                htmlType="button"
                block
              >
                {wallet.name}
              </Button>
            </Menu.Item>
          ))}
      </Menu>
    </ModelContainer>
  );
};
