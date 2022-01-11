import React from 'react';
import { View, Text, Platform } from 'react-native';
import {
  BaseButton,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { selectAddress, selectPort } from '../../redux/networkingSlice';

import { Draggable } from '../Draggables';

import styles from './styles';

const maxControllerRange = 32767;

export function FunctionalControllerItem({
  type,
  input,
  xPos,
  yPos,
  width,
  height,
  client,
}) {
  const address = useSelector(selectAddress);
  const port = useSelector(selectPort);

  const onTapHandlerStateChange = event => {
    const msg_hold = `${input},1`;
    const msg_release = `${input},0`;
    if (event.nativeEvent.state == State.BEGAN)
      client.send(msg_hold, 0, msg_hold.length, port, address);
    if (event.nativeEvent.state == State.END)
      client.send(msg_release, 0, msg_release.length, port, address);
  };

  const onDrag = (_, extras) => {
    const extrapolatedX = Math.floor(
      (maxControllerRange / 25) * extras.xPosFromOrigin,
    );

    const extrapolatedY = -Math.floor(
      (maxControllerRange / 25) * extras.yPosFromOrigin,
    );

    const msgX = `${input}X,${extrapolatedX}`;
    const msgY = `${input}Y,${extrapolatedY}`;
    client.send(msgX, 0, msgX.length, port, address);
    client.send(msgY, 0, msgY.length, port, address);
  };

  const onDragRelease = () => {
    const msgX = `${input}X,0`;
    const msgY = `${input}Y,0`;
    client.send(msgX, 0, msgX.length, port, address);
    client.send(msgY, 0, msgY.length, port, address);
  };

  const platformButton = () => {
    return Platform.OS == 'ios' ? (
      <View style={[styles.controller_button, { left: xPos, top: yPos }]}>
        <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
          <View style={[styles.controller_button_innerview, { width, height }]}>
            <Text style={styles.controller_button_text}>{input}</Text>
          </View>
        </TapGestureHandler>
      </View>
    ) : (
      <View style={[styles.controller_button, { left: xPos, top: yPos }]}>
        <BaseButton onHandlerStateChange={onTapHandlerStateChange}>
          <View style={[styles.controller_button_innerview, { width, height }]}>
            <Text style={styles.controller_button_text}>{input}</Text>
          </View>
        </BaseButton>
      </View>
    );
  };

  return (
    <>
      {type == 'button' && platformButton()}
      {type == 'stick' && (
        <View
          style={[
            styles.controller_stick_container,
            { left: xPos, top: yPos },
          ]}>
          <Draggable
            xPos={0}
            yPos={0}
            minX={-25}
            minY={-25}
            maxX={25}
            maxY={25}
            onDrag={onDrag}
            onDragRelease={onDragRelease}>
            <View style={styles.controller_stick_draggable}>
              <Text style={styles.controller_stick_text}>{input}</Text>
            </View>
          </Draggable>
        </View>
      )}
    </>
  );
}
