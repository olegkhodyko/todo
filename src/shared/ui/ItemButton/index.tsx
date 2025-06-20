import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ItemButtonProps {
  content: string;
  isLoading: boolean;
  action: () => void;
}

const ItemButton: FC<ItemButtonProps> = ({ content, action }) => (
  <TouchableOpacity
    style={[styles.button]}
    onPress={action}
  >
    <Text style={[styles.buttonText]}>{content}</Text>
  </TouchableOpacity>
);

export default ItemButton;
