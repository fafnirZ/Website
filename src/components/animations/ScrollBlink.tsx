import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {

}

const Container = styled.div`
  color: white;
  position: absolute;
  bottom: 20vh;
  right: 0vw;
  transform: rotate(90deg);
  display: flex;
`;

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut"
  }
}

const ScrollBlink: React.FC<Props> = ({}): ReactElement => {
  return (
    <motion.div
      transition={bounceTransition}
      animate={{ y: ['-2px', '2px']}}
    >
      <Container>
        <Typography variant="body2">scroll down</Typography>
        <Typography variant="body2">{'>>'}</Typography>
      </Container>
    </motion.div>
  );
};

export default ScrollBlink;