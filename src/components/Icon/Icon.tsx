import React from 'react';
import { StyledIcon } from './Icon.style';

export interface IIconProps {
  icon: string;
  size: number;
  color: string;
  rotate?: number;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
}

const Icon = ({ icon, className, ...props }: IIconProps) => (
  <StyledIcon
    className={`teledoc-icon-${icon} ${className}`}
    {...props}
    onClick={props.onClick}
  />
);

export default Icon;
