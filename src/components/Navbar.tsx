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

  .image_container img {
    object-fit: cover;
    height: 100%;
    border-radius: 50%;
  }

  .text_container {
    margin: 30px;
  }

`;


const Navbar: React.FC<Props> = ({}): ReactElement => {
  
  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(prevState => !prevState);
  }

  return (
    <>
    <NavContainer>
      <Box className="image_container">
        <Link href="/">
          <img src={Avatar} alt="" />
        </Link>
      </Box>
      <Box className="text_container">
        <Typography variant="h5" color="secondary" >
          <HackerWords Word="Hi, I'm Jacky"/>
        </Typography>
      </Box>
      <Hidden lgUp>
        <Box marginLeft="auto" onClick={handleDropDown}>
          <Hamburger/>
        </Box>
      </Hidden>
    </NavContainer>
    <AnimatePresence exitBeforeEnter initial={false}>
      {open && (<Hidden lgUp><Dropdown /></Hidden>)}
    </AnimatePresence>
    </>
  );
};

export default Navbar;