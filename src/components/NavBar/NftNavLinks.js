import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { NavLink } from 'react-router-dom'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import CurrencyToggle from '../CurrencyToggle'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import styled from 'styled-components'
import { useState } from 'react'

const NftNavLinks = (props) =>{

    return(
    <>
        <li className='mx-5 mt-4 '>
        <NavLink activeClassName="active" to='/'>Structural <br/> Legacies </NavLink>
        </li>
        <li className='mx-5 mt-4 '>
          <NavLink activeClassName="active" to='/'>HOME <br /> DESIGNS</NavLink>
        </li>
        <li className='mx-5 mt-4 '>
          <NavLink activeClassName="active" to='/'>HOME <br /> SYSTEM <br /> ARCHITECTURE</NavLink>
        </li>
        <li className='mx-5 mt-4'>
        <NavLink activeClassName="active" to='/'>PRODUCTS</NavLink>
        </li>

      
      </>);
}
export default NftNavLinks;