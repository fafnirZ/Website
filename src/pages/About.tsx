import React, { ReactElement, useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Typography, Card, useMediaQuery } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Information = [
  {
    title: "My Journey",
    body: "I started off my journey down this path as a programmer long before I even knew I was going to end up here, in year 7 when I was tinkering with minecraft plugins, trying to become a developer in some RPG server. Fast forward 6-7 years, and here I am still fascinated with code."
  },
  {
    title: "Skills and Experience",
    body: "Experienced in full stack web development, primarily ReactJs (Typescript) and NodeJs/Golang backend development. Experienced in using Docker as well as Github pages for deployment."
  }
]

const Cards = [
  {
    heading: 'Frontend Development',
    content: 'ReactJS',
  },
  {
    heading: 'Backend Development',
    content: 'Golang, NodeJS, Python, Java',
  },
  {
    heading: 'Data Analytics',
    content: 'Numpy, Pandas',
  },
  {
    heading: 'Scripting',
    content: 'Bash, Perl',
  }
]

const CardContainer = styled(Card)`
  height: 100px;
  /* width: min(70%, 300px); */
  width: 300px;
  border-radius: 3px;
  padding: 5px;
`;


const About: React.FC = ({}): ReactElement => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  // get global css variable for color
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-default')

  return (
    <Box margin={mdDown ? "50px" : "150px"}>
      <Grid container justifyContent="space-between" spacing={5}>
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection="column" gridGap="10px">
            {Information.map((obj)=> {
              return (
                <>
                  <Typography variant="h5" color="primary">
                    {obj.title}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    {obj.body}
                  </Typography>
                </>
              )
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gridGap="20px"
          >
            {Cards.map((card, index) => {
              return (
                <motion.div
                initial = {{ y : -1*(index)*100 , opacity: 0 }}
                animate = {{ y : 0, opacity: 1 }}
                transition = {{ 
                  duration: 0.3 * index ,
                  type: 'spring',
                }}
                >
                  <CardContainer
                    style={{
                      background: cardColor,
                    }}
                    elevation={10}
                  >
                    <Typography variant="subtitle1" color="primary">
                      {card.heading}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      {card.content} 
                    </Typography>
                    <CodeIcon color="secondary" />
                  </CardContainer>
                </motion.div>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;