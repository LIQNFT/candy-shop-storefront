import styled from 'styled-components';
import { Modal } from 'antd';

export const ModelContainer = styled(Modal)`
  .ant-modal-content {
    overflow: hidden;
    border-radius: 6px;
  }

  .ant-menu {
    background-color: unset;
    border-right: none;
  }

  .ant-menu-submenu-title {
    height: 48px !important;
  }

  & > .ant-menu-submenu {
    display: flex;
    flex-direction: column-reverse;
  }

  & .ant-menu-submenu-arrow {
    right: 18px;
  }

  & .ant-menu-submenu-title {
    margin: 0;
  }

  & .ant-menu-submenu-title:hover,
  .wallet-adapter-modal-menu
    .ant-menu-submenu:hover
    > .ant-menu-submenu-title
    > .ant-menu-submenu-arrow {
    color: white;
  }

  & .ant-menu-submenu-title > .ant-menu-title-content {
    padding-left: 25px;
  }

  .wallet-adapter-modal-menu-item {
    margin: 0px !important;
    padding: 0px !important;
    height: 48px !important;
  }

  .wallet-adapter-modal-menu-item:not(:last-child) {
    margin-bottom: 0px;
  }

  .wallet-adapter-modal-menu-button {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .wallet-adapter-modal-menu-button-icon {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }

  .wallet-adapter-multi-button-menu {
    padding: 0px;
    margin-top: -44px;
  }

  .wallet-adapter-multi-button-menu-item {
    padding: 0px;
  }

  .wallet-adapter-multi-button-menu-button {
    text-align: left;
  }

  .wallet-adapter-icon {
    width: 32px;
    max-height: 32px;
  }

  .wallet-adapter-multi-button-icon {
    font-size: 20px;
    margin-right: 12px;
  }

  .wallet-adapter-multi-button-item {
    padding: 0px;
    padding-left: 12px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
