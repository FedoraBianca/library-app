import React from 'react';
import CustomButton from '../CustomButton';
import Icon from '../Icon';
import { StyledModal } from './CustomModal.style';

export interface ICustomModalProps {
  title: string;
  showModal: boolean
  toggle: () => void;
  showCloseIcon?: boolean;
  toggleOnClickOutside?: boolean;
  actionText?: string;
  defaultFooter?: boolean;
  footerComponent?: React.ReactNode;
  size?: string;
  className?: string;
  children?: React.ReactNode;
  action?: (e: MouseEvent) => void;
}

const CustomModal = (props: ICustomModalProps) => (
  <div className={props.className}>
    <StyledModal isOpen={props.showModal} toggle={props.toggleOnClickOutside ? props.toggle : null} size={props.size}>
      <div className='header w-100'>
        { props.showCloseIcon && (
          <div className='close-wrapper' onClick={props.toggle}>
            <Icon icon='xmark' size={2.788} color='#28403d' />
          </div>
        )}
        <h5 className='modal-title w-100 mt-5'>{props.title}</h5>
      </div>
      <div className='body w-100'>
        {props.children}
      </div>
      {props.defaultFooter && (
        <div className='footer w-100 d-flex justify-content-center mb-5'>
          <CustomButton onClick={props.action as any}>{props.actionText}</CustomButton>
        </div>
      )}
      {props.footerComponent && (
        <div className='footer w-100 d-flex justify-content-center mb-5'>
          {props.footerComponent}
        </div>
      )}
    </StyledModal>
  </div>
);

CustomModal.defaultProps = {
  className: null,
  action: null,
  actionText: null,
  defaultFooter: true,
  size: 'md',
  showCloseIcon: true,
  toggleOnClickOutside: true
};

export default CustomModal;
