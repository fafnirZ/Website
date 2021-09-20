import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {

}

const Container = styled.div`
  height: 30px;
  width: 30px;
  top: 0px;

  rect {
    fill: var(--secondary);
  }
  rect:nth-child(2) {
    fill: var(--primary);
  }
`;

const Hamburger: React.FC<Props> = ({}): ReactElement => {
  return (
    <Container>
      <svg viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="9" rx="1" />
        <rect y="24" width="46" height="9" rx="1" />
        <rect y="12" width="46" height="9" rx="1" />
      </svg>
    </Container>
  );
};

export default Hamburger;