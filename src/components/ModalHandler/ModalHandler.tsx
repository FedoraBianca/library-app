import React from 'react';
import { useSelector } from 'react-redux';
import { modals } from '../../config/constants';
import { IModalProps, IPageModal } from '../../interfaces/page';
import { IState } from '../../interfaces/state';

const ModalHandler = () => {
  const activeModal: IPageModal = useSelector((state: IState) => state.page.modal);
  const modalProps: IModalProps = { showModal: true };

  if (activeModal.input) {
    modalProps.input = activeModal.input;
  }

  if (activeModal.active) {
    return React.createElement(modals.get(activeModal.active), modalProps);
  }

  return null;
};

export default ModalHandler;
