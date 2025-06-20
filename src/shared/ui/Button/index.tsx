import React, { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', title, ...rest }) => {
  const getButtonStyle = () => {
    return variant === 'primary'
      ? [styles.button, styles.buttonPrimary]
      : [styles.button, styles.buttonSecondary];
  };

  const getTextStyle = () => {
    return variant === 'primary'
      ? styles.buttonPrimaryText
      : styles.buttonSecondaryText;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} {...rest}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
