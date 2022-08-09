import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 8px;
  margin: 1rem;

  background-color: ${({ variant, theme }) => theme['green-500']};
`
