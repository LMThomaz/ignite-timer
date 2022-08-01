import styled from 'styled-components';
import { ButtonVariant } from './Button';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]};`;
  }}
`;
