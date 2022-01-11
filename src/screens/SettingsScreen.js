import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { Draggable } from '../components/Draggables';
import NetworkingControllerStick from '../components/ControllerComponents/ControllerSticks/NetworkingControllerStick';
import EditingControllerButton from '../components/ControllerComponents/ControllerButtons/EditingControllerButton';
import EditingControllerStick from '../components/ControllerComponents/ControllerSticks/EditingControllerStick';

import { darkThemeProps, textProps } from '../styles/GlobalStyles';

const maxControllerRange = 32767;

export default function SettingsScreen() {
  const onDrag = (nativeEvent, extras) => {
    const extraplotedX = (maxControllerRange / 25) * extras.xPosFromOrigin;
    const extraplotedY = (maxControllerRange / 25) * extras.yPosFromOrigin;
  };
  const onDragRelease = (nativeEvent, extras) => {
    // console.log(extras.xPosFromOrigin);
  };

  const gesture = Gesture.Tap()
    .maxDuration(100000)
    .onBegin(() => console.log('tap start'))
    .onEnd(() => console.log('tap end'));

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.controller_stick_container, { left: 50, top: 200 }]}>
        <Draggable
          xPos={0}
          yPos={0}
          minX={-25}
          minY={-25}
          maxX={25}
          maxY={25}
          onDragRelease={onDragRelease}
          onDrag={onDrag}>
          <View style={styles.controller_stick_draggable} />
        </Draggable>
      </View>

      <View
        style={[styles.controller_stick_container, { left: 450, top: 200 }]}>
        <Draggable xPos={0} yPos={0} minX={-25} minY={-25} maxX={25} maxY={25}>
          <View style={styles.controller_stick_draggable} />
        </Draggable>
      </View>

      <NetworkingControllerStick
        input="RS"
        text="RS"
        yPos={25}
        xPos={100}
        stickDiameter={100}
        maxDistance={30}
        outerBorderWidth={10}
        outerBorderColor="orange"
        innerBackgroundColor="cyan"
        fontSize={16}
        fontWeight="bold"
        fontColor="red"
      />

      <EditingControllerButton
        text="X"
        xPos={0}
        yPos={50}
        minX={0}
        maxX={600}
        minY={0}
        maxY={200}
        width={75}
        height={75}
        borderWidth={2}
        borderRadius={20}
        borderColor="white"
        fontSize={16}
        fontWeight="bold"
        fontColor="white"
      />

      <EditingControllerStick
        xPos={500}
        yPos={100}
        minX={0}
        maxX={600}
        minY={0}
        maxY={200}
        stickDiameter={25}
        maxDistance={25}
        outerBorderWidth={1}
        outerBorderColor="white"
        innerBackgroundColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  controller_stick_container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  controller_stick_draggable: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: darkThemeProps.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controller_stick_text: {
    fontSize: textProps.size.xl,
    color: textProps.emphasis.high,
  },
});
