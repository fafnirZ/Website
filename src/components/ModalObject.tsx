import React, { ReactElement, useEffect, useState } from 'react';
import {
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Link,
} from '@material-ui/core';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// own
import { ProjectData } from 'src/Data/ProjectData';
import { ProjectType } from 'src/types/ProjectTypes';

interface Props {
  open: boolean;
  handleClose: () => void;
  data: string;
}

interface StyledProps {
  smDown: boolean;
}

const Container = styled.div<StyledProps>`
  width: min(60vw, 800px);
  height: 500px;
  border-radius: 8px;
  overflow: hidden;

  background: var(--card-default);
  outline: none;
  display: flex;
  ${(props) =>
    props.smDown &&
    css`
      flex-direction: column;
      width: 70vw;
    `}

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .image_container {
    width: 50%;
    height: 100%;
    display: flex;
    ${(props) =>
      props.smDown &&
      css`
        width: 100%;
      `}
  }
  .image_container > img {
    object-fit: cover;
    object-position: 80% 0;
    width: 100%;
  }

  .content_container {
    margin: 20px;
  }
`;

/* eslint max-len: off */
const ModalObject: React.FC<Props> = ({
  open,
  handleClose,
  data,
}): ReactElement => {
  const [info, setInfo] = useState({} as ProjectType);
  const [loaded, setLoaded] = useState(false);

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const result = ProjectData.find(
      (element) => element.title === data
    ) as ProjectType;
    // console.log(result)
    setInfo(result);
    setLoaded(true);
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: '50vh' }}
        exit={{ y: '200vh' }}
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <Container smDown={smDown}>
          <div className="image_container">
            {loaded && <img src={info.image} alt="" />}
          </div>
          <div className="content_container">
            <Typography variant="h5" color="secondary">
              {' '}
              {info.title}{' '}
            </Typography>
            <Box display="flex" gridGap="20px">
              {loaded &&
                info.tags.map((tag) => {
                  return (
                    <Typography variant="subtitle1" color="primary">
                      {tag}
                    </Typography>
                  );
                })}
            </Box>
            <Box display="flex" margin="20px 0" gridGap="20px">
              {loaded && info.github && (
                <Link href={info.github}>
                  <svg
                    width="30"
                    height="30"
                    focusable="false"
                    viewBox="0 0 12 12"
                    fill="white"
                  >
                    <path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 003.437 4.77.594.594 0 00.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674-.227-.58-.555-.734-.555-.734-.454-.312.034-.306.034-.306.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418.046-.325.174-.546.317-.672-1.11-.127-2.277-.558-2.277-2.482 0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.77 4.77 0 016 3.408c.425.002.853.058 1.252.17.955-.65 1.374-.516 1.374-.516.272.692.1 1.202.05 1.33.32.35.513.799.513 1.347 0 1.93-1.169 2.354-2.283 2.478.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0011 6C11 3.223 8.757.98 6 .98z" />
                  </svg>
                </Link>
              )}
              {loaded && info.link && (
                <>
                  <Typography variant="body1" color="secondary">
                    Live Site:{' '}
                  </Typography>
                  <Link href={info.link}>
                    <Typography variant="body1">{info.link}</Typography>
                  </Link>
                </>
              )}
            </Box>
          </div>
        </Container>
      </motion.div>
    </Modal>
  );
};

export default ModalObject;
