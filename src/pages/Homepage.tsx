import React, { ReactElement } from 'react';
import {
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Hidden,
  Container,
} from '@material-ui/core';
import styled, { css } from 'styled-components';

// local imports
import About from './About';
import Projects from './Projects';

// components
import ScrollBlink from 'src/components/animations/ScrollBlink';
import OperaBridge from 'src/components/animations/OperaBridge';
import Opera from 'src/components/animations/Opera';
// import HackerWords from 'src/components/animations/HackerWords';

interface Props {}

interface StyledProps {
  mdDown?: boolean;
  smDown?: boolean;
}

const HomeContainer = styled.div<StyledProps>`
  display: flex;
  ${(props) =>
    props.mdDown
      ? css`
          height: 80vh;
        `
      : css`
          height: 100vh;
        `}
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.smDown
      ? css`
          margin: 0;
        `
      : css`
          margin: 0 50px;
        `}
`;

const Homepage: React.FC<Props> = ({}): ReactElement => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <HomeContainer mdDown={mdDown} smDown={smDown}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h5" color="secondary" id="text">
                Third year, Software Engineer
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant="outlined" color="primary" id="btn">
                contact me
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Hidden smDown>
                <OperaBridge />
              </Hidden>
              <Hidden mdUp>
                <Opera />
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </HomeContainer>
      <ScrollBlink />
      <About />
      <Projects />
    </>
  );
};

export default Homepage;
