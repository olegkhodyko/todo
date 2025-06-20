import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ItemButtonProps {
  content: string;
  isLoading: boolean;
  action: () => void;
}

const ItemButton: FC<ItemButtonProps> = ({ content, isLoading, action }) => (
  <TouchableOpacity
    style={styles.smallButton}
    onPress={action}
    disabled={isLoading}
  >
    <Text style={styles.smallButtonText}>{content}</Text>
  </TouchableOpacity>
);

export default ItemButton;
