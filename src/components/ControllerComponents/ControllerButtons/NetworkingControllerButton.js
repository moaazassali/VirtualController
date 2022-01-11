import React from 'react';
import { View } from 'react-native';

import CustomPressable from '../CustomPressable';
import ControllerButtonDesign from './ControllerButtonDesign';

export default function NetworkingControllerButton({
  input,
  text,
  xPos,
  yPos,
  width,
  height,
  borderWidth,
  borderRadius,
  borderColor,
  backgroundColor,
  fontSize,
  fontWeight,
  fontColor,
  client,
  address,
  port,
}) {
  const sendMsg = state => {
    const msg = `${input},${state}`;
    client.send(msg, 0, msg.length, port, address);
  };
  return (
    <View style={{ left: xPos, top: yPos, position: 'absolute' }}>
      <CustomPressable onBegin={() => sendMsg(1)} onEnd={() => sendMsg(0)}>
        <ControllerButtonDesign
          text={text}
          width={width}
          height={height}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        />
      </CustomPressable>
    </View>
  );
}
