import React, { ReactElement, useEffect, useState } from 'react';
import { Modal, Typography, useMediaQuery, useTheme, Box } from '@material-ui/core';
import styled , { css } from 'styled-components';

// own 
import { ProjectData } from 'src/Data/ProjectData';
import { ProjectType } from 'src/types/ProjectTypes';

interface Props {
  open: boolean;
  handleClose: () => void;
  data: string;
}

interface StyledProps {
  smDown : boolean;
}


const Container = styled.div<StyledProps>`
  width: min(60vw, 800px);
  height: 500px;
  border-radius: 8px;
  overflow: hidden;


  background: var(--card-default);
  outline: none;
  display:flex;
  ${props=> props.smDown && css`
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
    display:flex;
    ${props=> props.smDown && css`
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
    const result = ProjectData.find(element => element.title === data) as ProjectType
    console.log(result)
    setInfo(result)
    setLoaded(true);
  }, [])

  return (
    <Modal open={open} onClose={handleClose}>
      <Container smDown={smDown}>
        <div className="image_container">
          {loaded && <img src={info.image} alt="" />}
        </div>
        <div className="content_container">
          <Typography variant="h5" color="secondary"> {info.title} </Typography>
          <Box display="flex" gridGap="20px">
            {loaded && info.tags.map((tag) => {
              return (
                <Typography variant="subtitle1" color="primary">
                  {tag}
                </Typography>
              )
            })}
          </Box>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalObject;
