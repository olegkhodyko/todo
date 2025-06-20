import React, { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonVariant, getButtonStyles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  variant = '[md-blue]',
  title,
  style,
  ...rest
}) => {
  const { container, text } = getButtonStyles(variant);

  return (
    <TouchableOpacity style={[container, style]} {...rest}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
