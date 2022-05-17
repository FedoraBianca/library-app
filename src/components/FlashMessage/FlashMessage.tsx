import React, { useEffect, useState } from 'react';
import { AlertProps } from 'reactstrap';
import { StyledAlert } from './FlashMessage.style';

interface IFashMessageProps extends AlertProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  autoFadeMilliseconds?: number;
  onClose?: () => void;
  className?: string;
}

const FlashMessage = (props: IFashMessageProps) => {
  const { autoFadeMilliseconds, onClose = undefined, children, ...rest } = props;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (Number.isFinite(autoFadeMilliseconds)) {
      interval = setTimeout(handleClose, autoFadeMilliseconds);
    }

    return () => {
      clearTimeout(interval);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledAlert {...rest} isOpen={visible} toggle={handleClose}>
      {children}
    </StyledAlert>
  );
};

FlashMessage.defaultProps = {
  color: 'success',
  className: ''
};

export default FlashMessage;
