import React, { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

type ButtonType = 'blue' | 'gray';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({ type = 'blue', title, style, ...rest }) => (
  <TouchableOpacity style={[styles.button, type === 'gray' && styles.cancelButton, style]} {...rest}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
