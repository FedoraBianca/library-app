import styled from 'styled-components';

interface IStyleIcon {
  size: number;
  color: string;
  rotate?: number;
}

export const StyledIcon = styled.span<IStyleIcon>`
  display: inline-block;
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}

  &.pointer {
    cursor: pointer;
  }
`;
