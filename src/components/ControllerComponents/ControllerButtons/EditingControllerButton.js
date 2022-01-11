import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateItemPosition } from '../../../redux/profilesSlice';

import CustomDraggable from '../CustomDraggable';
import ControllerButtonDesign from './ControllerButtonDesign';

import { darkThemeProps, textProps } from '../../../styles/GlobalStyles';

export default function EditingControllerButton({
  id,
  input,
  text,
  xPos = 0,
  yPos = 0,
  minX = -10000,
  maxX = 10000,
  minY = -10000,
  maxY = 10000,
  width = 50,
  height = 50,
  borderWidth = 2,
  borderRadius = 10,
  borderColor = darkThemeProps.primary,
  backgroundColor = 'transparent',
  fontSize = textProps.size.xl,
  fontWeight = textProps.weight.bold,
  fontColor = textProps.emphasis.high,
}) {
  const dispatch = useDispatch();

  return (
    <CustomDraggable
      xPos={xPos}
      yPos={yPos}
      minX={minX}
      maxX={maxX}
      minY={minY}
      maxY={maxY}
      onDrag={(_, extras) => {
        dispatch(
          updateItemPosition({
            id,
            xPos: extras.absoluteX,
            yPos: extras.absoluteY,
          }),
        );
      }}
      reverse={false}>
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
    </CustomDraggable>
  );
}
