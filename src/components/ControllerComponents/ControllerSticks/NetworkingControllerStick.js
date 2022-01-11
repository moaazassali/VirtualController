import React from 'react';
import { View } from 'react-native';

import CustomDraggable from '../CustomDraggable';
import {
  ControllerStickInnerDesign,
  ControllerStickOuterDesign,
} from './ControllerStickDesign';

const maxControllerRange = 32767;

export default function NetworkingControllerStick({
  input,
  text,
  xPos,
  yPos,
  stickDiameter,
  maxDistance,
  outerBorderWidth,
  outerBorderColor,
  innerBackgroundColor,
  fontSize,
  fontWeight,
  fontColor,
  client,
  address,
  port,
}) {
  const onDrag = (_, extras) => {
    const extrapolatedX = Math.floor(
      (maxControllerRange / maxDistance) * extras.displacementX,
    );
    const extrapolatedY = -Math.floor(
      (maxControllerRange / maxDistance) * extras.displacementY,
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

  return (
    <View style={{ left: xPos, top: yPos, position: 'absolute' }}>
      <ControllerStickOuterDesign
        diameter={stickDiameter + 2 * maxDistance}
        borderWidth={outerBorderWidth}
        borderColor={outerBorderColor}>
        <CustomDraggable
          xPos={maxDistance - outerBorderWidth}
          yPos={maxDistance - outerBorderWidth}
          minX={-outerBorderWidth}
          maxX={2 * maxDistance - outerBorderWidth}
          minY={-outerBorderWidth}
          maxY={2 * maxDistance - outerBorderWidth}
          onDrag={onDrag}
          onDragRelease={onDragRelease}
          reverse={true}>
          <ControllerStickInnerDesign
            text={text}
            diameter={stickDiameter}
            backgroundColor={innerBackgroundColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontColor={fontColor}
          />
        </CustomDraggable>
      </ControllerStickOuterDesign>
    </View>
  );
}
