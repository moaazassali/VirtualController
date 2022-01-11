import React from 'react';
import { Text, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { hideScreensMenu } from '../../redux/uiSlice';
import { selectAddress, selectPort } from '../../redux/networkingSlice';

import styles from './styles';

export default function ConnectButton({ openControllerViewFunc, client }) {
  const dispatch = useDispatch();
  const address = useSelector(selectAddress);
  const port = useSelector(selectPort);

  return (
    <Pressable
      onPress={() => {
        openControllerViewFunc();
        dispatch(hideScreensMenu());
        const msg = 'C,1';
        console.log(port);
        client.send(msg, 0, msg.length, port, address);
      }}
      style={styles.connect_button}>
      <Text style={styles.connect_button_text}>CONNECT</Text>
    </Pressable>
  );
}
