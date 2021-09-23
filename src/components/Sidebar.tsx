import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link, Box, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Links from 'src/Data/Links';

interface Props {
  page: string;
  setPage: (event: React.SyntheticEvent) => void;
}

const SideContainer = styled.div`
  height: 90vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* sticky sidebar */
  position: sticky;
  top: 0;
`;

const IconContainer = styled.div`
  display: flex;
  margin: 15px;
  grid-gap: 10px;

  svg {
    fill: white;
  }

  svg:hover {
    transform: scale(110%);
  }
`;

/* eslint max-len: off */
const Sidebar: React.FC<Props> = ({ page, setPage }): ReactElement => {
  return (
    <SideContainer>
      {Links.map((item) => {
        return (
          <Box margin="20px">
            <NavLink
              to={item.link}
              style={{
                textDecoration: 'none',
              }}
            >
              <Box onClick={setPage} id={item.link}>
                <Typography
                  color={item.link === page ? 'primary' : 'secondary'}
                  variant="subtitle1"
                >
                  {item.display}
                </Typography>
              </Box>
            </NavLink>
          </Box>
        );
      })}
      <IconContainer>
        <Link href="https://www.linkedin.com/in/jacky-xie/">
          <svg width="32" height="32" viewBox="-1 0 130 130">
            <path d="M72.04,14.166c-31.939,0-57.833,25.894-57.833,57.833c0,31.94,25.893,57.835,57.833,57.835  c31.941,0,57.836-25.895,57.836-57.835C129.875,40.06,103.981,14.166,72.04,14.166z M48.042,40.25c3.934,0,7.125,2.91,7.125,6.5  s-3.191,6.5-7.125,6.5c-3.936,0-7.125-2.91-7.125-6.5S44.106,40.25,48.042,40.25z M55.221,95.845H41.143V59.11h14.078V95.845z   M103.059,95.845H88.913v-20.2c0-2.306-0.428-3.938-1.281-4.896c-0.854-0.956-2.053-1.436-3.596-1.436  c-1.707,0-3.092,0.646-4.152,1.938c-1.061,1.292-1.59,3.609-1.59,6.953v17.641H64.215V59.11h13.109v5.983  c1.959-2.443,3.943-4.19,5.949-5.24c2.006-1.049,4.449-1.573,7.332-1.573c3.898,0,6.947,1.158,9.15,3.476  c2.201,2.317,3.303,5.897,3.303,10.74V95.845z" />
          </svg>
        </Link>
        <Link href="https://github.com/fafnirZ">
          <svg width="30" height="30" focusable="false" viewBox="0 0 12 12">
            <path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 003.437 4.77.594.594 0 00.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674-.227-.58-.555-.734-.555-.734-.454-.312.034-.306.034-.306.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418.046-.325.174-.546.317-.672-1.11-.127-2.277-.558-2.277-2.482 0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.77 4.77 0 016 3.408c.425.002.853.058 1.252.17.955-.65 1.374-.516 1.374-.516.272.692.1 1.202.05 1.33.32.35.513.799.513 1.347 0 1.93-1.169 2.354-2.283 2.478.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0011 6C11 3.223 8.757.98 6 .98z" />
          </svg>
        </Link>
      </IconContainer>
    </SideContainer>
  );
};

export default Sidebar;
