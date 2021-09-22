import React, { ReactElement } from 'react';
import styled from "styled-components";
import { Box } from "@material-ui/core";

interface MenuProps {

}



const Container = styled.div`
  position: absolute;
  background: black;
  width: 100%;
  z-index: 999;
  height: 100%;
  overflow: hidden;
`;


const Menu = ({}: MenuProps): ReactElement => {
  return (
    <Container >
      helloasdas
    </Container>
  );
};

export default Menu;