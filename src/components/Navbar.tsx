import React, { ReactElement, useState, useEffect } from 'react';
import { Link, Box, Typography, Hidden } from '@material-ui/core';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

//local imports
import Avatar from 'src/assets/me-pixel.png';
import HackerWords from './animations/HackerWords';
import Hamburger from './Hamburger';
import Dropdown from './Dropdown';
interface Props {
  open: boolean
  handleDropDown: () => void
}

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  height: calc(10vh - 10px*2);

  position: sticky;
  top: 0%;
  background: var(--background-color);
  z-index: 999;

  .image_container {
    display: flex;
    height: 80%;
    max-height: 60px;
  }

  .image_container > img {
    object-fit: cover;
    width: 80%;
    border-radius: 50%;
  }

  .text_container {
    margin: 30px;
  }

`;


const Navbar: React.FC<Props> = ({ open, handleDropDown }): ReactElement => {

  return (
    <>
    <NavContainer>
      <Link href="/">
        <Box className="image_container">
          <img src={Avatar} alt="" />
        </Box>
      </Link>
      <Box className="text_container">
        <Typography variant="h5" color="secondary" >
          <HackerWords Word="Hi, I'm Jacky"/>
        </Typography>
      </Box>
      <Hidden lgUp>
        <Box marginLeft="auto" onClick={handleDropDown}>
          <Hamburger open={open} />
        </Box>
      </Hidden>
    </NavContainer>
    </>
  );
};

export default Navbar;