import React, { useEffect, useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, useLocation } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CurrencyToggle from "./CurrencyToggle";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import { RouteName } from "../constant/routeNames";
import MobileNavigation from "./NavBar/MobileNavigation";
import Navigation from "./NavBar/Navigation";

interface TopNavProps {
  showCurrencyToggle?: boolean;
}

const ROUTES = [
  { url: RouteName.HomePage, name: "Home" },
  { url: RouteName.marketplace, name: "Marketplace" },
  { url: RouteName.sell, name: "Sell" },
];

// const OTHER_LAYOUT_ROUTES = [
//   { url: RouteName.customToken, name: "Custom Token Marketplace" },
//   { url: RouteName.multipleCollection, name: "Multi Collection Marketplace" },
//   { url: RouteName.marketplaceWithUrl, name: "Marketplace With URL" },
//   {
//     url: RouteName.multipleCurrencyMarketplace,
//     name: "Multi Currency Marketplace",
//   },
//   { url: RouteName.multipleCurrencySell, name: "Multi Currency Sell" },
// ];

const TopNav: React.FC<TopNavProps> = ({ showCurrencyToggle = false }) => {
  const wallet = useAnchorWallet();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);

  const { pathname } = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderBar className="navbar navbar-expand-lg navbar-light HeaderBar">
      <Logo>
        <Link to={RouteName.HomePage}>
        <img alt="" src="/Homeqube-logo-black_small 1.svg" />
        </Link>
      </Logo>
      <MobileNavigation />
      <Navigation />
      <Wallet>
        {wallet ? (
          <ConnectButton className="wallet-width" />
        ) : (
          <ConnectButton className="wallet-width">Connect Wallet</ConnectButton>
        )}
      </Wallet>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
 
  padding-right: 4%;
  padding-left: 4%;
`;

const DropdownAnchor = styled.li`
  cursor: pointer;

  &:hover {
    color: rgb(131, 146, 161);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 15px;

    a {
      padding-top: 4px;
      padding-bottom: 4px;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`;

const Wallet = styled.ul`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
`;

const ConnectButton = styled(WalletMultiButton)`
  border-radius: 18px !important;
  padding: 6px 16px;
  border-radius: 50rem !important;
  background-color: #4e44ce;
  margin: 0 auto;
  margin-top: 1.5rem !important;
  font-family: "Rajdhani", sans-serif !important;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;

  img {
    height: 7rem;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  flex: 1 0 auto;
  margin-bottom: 0;

  li {
    margin: 0 12px;

    a {
      color: var(--main-text-color);
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;
      padding-bottom: 15px;

      img {
        max-height: 26px;
      }
    }

    a:hover,
    a:active {
      color: rgb(131, 146, 161);
      border-bottom: 4px solid var(--title-text-color);
    }
  }
`;

export default TopNav;
