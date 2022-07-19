import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { NavLink } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CurrencyToggle from "../CurrencyToggle";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownContainer = styled("li")`
`;

const DropDownHeader = styled("a")`
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  margin-top: 0.125rem;
  background-color: #2f2f2f;
  text-align: center;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  list-style: none;
  background-clip: padding-box;
  border: 1pxsolidrgba (0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

const ListItem = styled("li")`
  display: block;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #fff;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
`;

const NavLinks = (props) => {
  const [active, setActive] = useState("navItem1");
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <>
      <li
        className="mx-3 mt-4"
        onClick={() =>
          setActive("navItem1") && props.isMobile && props.closeMobileMenu()
        }
      >
        <NavLink to="/structural-legacies">
          NFT <br /> COLLECTIONS
        </NavLink>
      </li>
      <li
        className="mx-3 mt-4"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <NavLink activeClassName="active" to="/claimqubes">
          CLAIM <br /> QUBES
        </NavLink>
      </li>
      <li
        className="mx-3 mt-4"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <NavLink activeClassName="active" to="/mycollection">
          MY <br /> COLLECTION
        </NavLink>
      </li>

      <li
        className="mx-3 mt-4"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://www.homeqube.ai/"
          key={"homeqube"}
          target="_blank"
          rel="noreferrer"
        >
          HOMEQUBE.AI
        </a>
      </li>
  
      <li
        className="mx-2 mt-4"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://t.me/homeqube"
          key={"telegram"}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="exchange-button-more btn rounded-pill"
            type="button"
          >
            TELEGRAM
          </button>
        </a>
      </li>
      <li
        className="mx-2 mt-4"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://discord.gg/JhQXmjm59e"
          key={"telegram"}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="exchange-button-more2 btn rounded-pill"
            type="button"
          >
            DISCORD
          </button>
        </a>
      </li>

    </>
  );
};
export default NavLinks;

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
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
  background-color: #4e44ce;
  margin: 0 auto;
  margin-top: 1.5rem !important;
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
