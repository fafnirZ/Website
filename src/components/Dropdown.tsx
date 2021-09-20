import React, { ReactElement, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

import Links from 'src/Data/Links';

interface Props {

}

const Container = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
  margin-left: auto;

  position: absolute;
  /*top: 10vh;  required */
  right: 0;

`

interface StyledProps {
  index: number
}


const SectionContainer = styled.div<StyledProps>`
  background: var(--card-default);
  width: 100px;
  height: 30px;
  margin: 2px 0;
  position: sticky;
  top: ${props=> props.index * 10 + 'px'};
`;

const Dropdown: React.FC<Props> = ({}): ReactElement => {
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-default')
  return (
    <Container>
      {Links.map((item, index) => {
        return (
          <motion.div
            initial={{ y: -1*index*30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
            exit={{ y: -1*index*30, opacity: 0 }}
            whileHover={{ scale: 1.2 }}
          >
            <SectionContainer index={index}>
              <NavLink
                to={item.link}
                style={{
                  textDecoration: 'none'
                }}
              >
                <Typography variant="subtitle1" color="secondary">
                  {item.display}
                </Typography>
              </NavLink>
            </SectionContainer>
          </motion.div>
        )
      })}
    </Container>
  );
};

export default Dropdown;