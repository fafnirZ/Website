import React, { ReactElement } from 'react';
import { Modal } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactChild;
}

const Container = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 3px;
  background: var(--card-default);
  outline: none;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalObject: React.FC<Props> = ({
  open,
  handleClose,
  children,
}): ReactElement => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </Modal>
  );
};

export default ModalObject;
