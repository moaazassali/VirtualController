import React, { useState } from 'react';

import CustomDraggable from '../CustomDraggable';
import {
  ControllerStickInnerDesign,
  ControllerStickOuterDesign,
} from './ControllerStickDesign';

import { darkThemeProps, textProps } from '../../../styles/GlobalStyles';

export default function EditingControllerStick({
  id,
  input,
  text,
  xPos = 0,
  yPos = 0,
  minX = -10000,
  maxX = 10000,
  minY = -10000,
  maxY = 10000,
  stickDiameter = 150,
  maxDistance = 25,
  outerBorderWidth = 2,
  outerBorderColor = darkThemeProps.primary,
  innerBackgroundColor = darkThemeProps.error,
  fontSize = textProps.size.xl,
  fontWeight = textProps.weight.bold,
  fontColor = textProps.emphasis.high,
}) {
  return (
    <CustomDraggable
      xPos={xPos}
      yPos={yPos}
      minX={minX}
      maxX={maxX}
      minY={minY}
      maxY={maxY}>
      <ControllerStickOuterDesign
        diameter={stickDiameter + 2 * maxDistance}
        borderWidth={outerBorderWidth}
        borderColor={outerBorderColor}>
        <ControllerStickInnerDesign
          text={text}
          diameter={stickDiameter}
          backgroundColor={innerBackgroundColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        />
      </ControllerStickOuterDesign>
    </CustomDraggable>
  );
}
