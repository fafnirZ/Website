import React, { ReactElement, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  open : boolean
}

interface StyledProps{
  open: boolean
}

const Container = styled.div<StyledProps>`
  height: 30px;
  width: 30px;
  top: 0px;

  rect {
    fill: var(--secondary);
  }
  rect:nth-child(3) {
    fill: var(--primary);
  }

  ${props=> props.open && css`
    rect:nth-child(3) {
      opacity: 0;
      transition: opacity 0.5s;
    }
    rect:nth-child(1) {
      transform: translate(15%, -5%) rotate(45deg);
      transition: transform 0.5s;
    }
    rect:nth-child(2) {
      transform: translate(-15%,65%) rotate(-45deg);
      transition: transform 0.5s;
    }
  `}

  ${props=> !props.open && css`
    rect:nth-child(3) {
      opacity: 1;
      transition: opacity 0.5s;
    }
    rect:nth-child(1) {
      transition: transform 0.5s;
    }
    rect:nth-child(2) {
      transition: transform 0.5s;
    }
  `}

`;

const Hamburger: React.FC<Props> = ({ open }): ReactElement => {
  return (
    <Container open={open}>
      <svg viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="9" rx="1" />
        <rect y="12" width="46" height="9" rx="1" />
        <rect y="24" width="46" height="9" rx="1" />
      </svg>
    </Container>
  );
};

export default Hamburger;