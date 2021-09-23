import React, { ReactElement, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Card,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import styled from 'styled-components';


// own imports
import ModalObject from 'src/components/ModalObject';
import { ProjectData } from 'src/Data/ProjectData';
// import { ProjectType } from 'src/types/ProjectTypes';

interface Props {}

interface ButtonStyledProps {
  smDown: boolean;
}

const ButtonContainer = styled.button<ButtonStyledProps>`
  width: min(25vw, 200px);
  height: clamp(40px, 10%, 50px);
  background: var(--background-light);
  border: none;
  border-radius: 3px;
  margin: 2px;

  /* transitions */
  transition: all 0.2s ease in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;

  &:hover {
    background: var(--primary);
  }
`;

const CardContainer = styled(Card)`
  width: min(70vw, 300px);
  height: 250px;

  & > img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
`;


const buttons = [{ name: 'Frontend' }, { name: 'Backend' }, { name: 'Other' }];


const Projects: React.FC<Props> = ({}): ReactElement => {
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--card-default'
  );
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('' as string);

  const handleOpen = (e: React.SyntheticEvent) => {
    setOpen(true);
    const curr = e.currentTarget.id as string;
    setCurrent(curr);
    // console.log(curr)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      marginBottom="50px"
      marginLeft={mdDown ? '50px' : '150px'}
    >
      <Box
        margin="50px 0"
        display="flex"
        flexDirection={smDown ? 'column' : 'row'}
      >
        {buttons.map((button, index) => {
          return (
            <motion.div
              // 150 is width of button
              initial={{ x: -1 * index * 150 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                type: 'spring',
              }}
            >
              <ButtonContainer smDown={smDown}>
                <Typography color="secondary">{button.name}</Typography>
              </ButtonContainer>
            </motion.div>
          );
        })}
      </Box>
      <Box>
        <Grid container spacing={3}>
          {ProjectData.map((obj, index) => {
            return (
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{
                    x: -1 * (index % 3) * 300,
                    y: -1 * Math.floor(index / 3) * 250,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                  }}
                >
                  <CardContainer
                    style={{
                      background: cardColor,
                    }}
                    elevation={5}
                    onClick={handleOpen}
                    id={obj.title}
                  >
                    <img src={obj.image} alt="" />
                  </CardContainer>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {open && <ModalObject open={open} handleClose={handleClose} data={current} />}
    </Box>
  );
};

export default Projects;
