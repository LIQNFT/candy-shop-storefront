import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import styled from 'styled-components'
import { useCurrency } from './Currency'

const CurrencyToggle: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const { currency, setCurrency, currencyOptions } = useCurrency();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef?.current && (anchorRef.current as any).contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      if (anchorRef.current !== null) anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <CurrencyToggleDiv ref={anchorRef} onClick={handleToggle}>
      Currency: {currency}
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                {currencyOptions.map(option => (
                  <MenuItem key={option.currencySymbol} onClick={() => setCurrency(option.currencySymbol)}>
                    {option.currencySymbol}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </CurrencyToggleDiv>
  )
}

const CurrencyToggleDiv = styled.div`
  display: flex;
  border-radius: 12px !important;
  padding: 6px 16px;
  background-color: var(--card-background-lighter-color);
  align-items: center;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;

  .MuiList-root {
    margin-top: 15px;

    a {
      padding: 4px 12px;
      color: #fff;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`

export default CurrencyToggle