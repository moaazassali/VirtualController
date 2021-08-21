import React from 'react';
import { Text, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { hideScreensMenu } from '../../redux/uiSlice';

import styles from './styles';

export default function ConnectButton({ openControllerViewFunc }) {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        openControllerViewFunc();
        dispatch(hideScreensMenu());
      }}
      style={styles.connect_button}>
      <Text style={styles.connect_button_text}>CONNECT</Text>
    </Pressable>
  );
}
