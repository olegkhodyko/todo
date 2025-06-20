import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

const Input: FC<TextInputProps> = ({ style, ...rest }) => (
  <TextInput style={[styles.input, style]} {...rest} />
);

export default Input;
