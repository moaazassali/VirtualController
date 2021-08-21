import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Draggable from '../DraggableCustom';

import styles from './styles';

export function FunctionalControllerButton({ input, xPos, yPos }) {
  return (
    <View
      onTouchStart={() => console.log(`pressed ${input}`)}
      onTouchCancel={() => console.log(`released ${input}`)}
      style={[
        styles.controller_button,
        {
          left: xPos,
          top: yPos,
        },
      ]}>
      <View style={styles.controller_button_innerview}>
        <Text style={styles.controller_button_text}>{input}</Text>
      </View>
    </View>
  );
}

export function FunctionalControllerStick({ input, xPos, yPos }) {
  return (
    <View style={styles.controller_stick_container}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'cyan',
        }}
      />
      <Draggable
        x={100 - 77}
        y={100 - 77}
        minX={0}
        minY={0}
        maxX={200}
        maxY={200}
        shouldReverse>
        <View style={styles.controller_stick_draggable}>
          <Text style={styles.controller_stick_text}>+</Text>
        </View>
      </Draggable>
    </View>
  );
}
