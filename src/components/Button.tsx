import { ButtonContainer } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Click me</ButtonContainer>;
}
