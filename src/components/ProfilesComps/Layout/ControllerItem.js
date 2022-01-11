import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  addButton,
  addStick,
  updateItemPosition,
  selectViewDimensions,
} from '../../../redux/profilesSlice';

import ControllerItemOptions from './ControllerItemOptions';
import Draggable from '../../DraggableCustom';

import styles from './styles';
import { darkThemeProps, textProps } from '../../../styles/GlobalStyles';

export function ListControllerItem({ type, input, text }) {
  const dispatch = useDispatch();
  const viewDimensions = useSelector(selectViewDimensions);

  return (
    <>
      {type == 'button' && (
        <Pressable
          onPress={() => {
            dispatch(
              addButton({
                input,
                text,
                xPos: (viewDimensions.width - 50) / 2,
                yPos: (viewDimensions.height - 50) / 2,
                width: 50,
                height: 50,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: darkThemeProps.primary,
                backgroundColor: 'transparent',
                fontSize: textProps.size.xl,
                fontWeight: textProps.weight.bold,
                fontColor: textProps.emphasis.high,
              }),
            );
          }}
          style={{
            ...styles.controller_button,
            width: 50,
            height: 50,
          }}>
          <Text style={styles.controller_button_text}>{input}</Text>
        </Pressable>
      )}
      {type == 'stick' && (
        <Pressable
          onPress={() =>
            dispatch(
              addStick({
                input,
                text,
                xPos: (viewDimensions.width - 200) / 2,
                yPos: (viewDimensions.height - 200) / 2,
                stickDiameter: 150,
                maxDistance: 25,
                outerBorderWidth: 2,
                outerBorderColor: darkThemeProps.primary,
                innerBackgroundColor: darkThemeProps.error,
                fontSize: textProps.size.xl,
                fontWeight: textProps.weight.bold,
                fontColor: textProps.emphasis.high,
              }),
            )
          }
          style={styles.controller_stick_outer}>
          <View style={styles.controller_stick_inner}>
            <Text style={styles.controller_stick_text}>{input}</Text>
          </View>
        </Pressable>
      )}
    </>
  );
}

export function LayoutControllerItem({
  type,
  input,
  id,
  xPos,
  yPos,
  maxX,
  maxY,
  width,
  height,
}) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [itemWidth, setItemWidth] = useState(width);
  const [itemHeight, setItemHeight] = useState(height);

  const dispatch = useDispatch();

  return (
    <>
      {type == 'button' && (
        <Draggable
          x={xPos}
          y={yPos}
          minX={0}
          minY={0}
          maxX={maxX}
          maxY={maxY}
          onDragRelease={(_, _1, bounds) =>
            dispatch(
              updateItemPosition({ id, xPos: bounds.left, yPos: bounds.top }),
            )
          }
          onDrag={() => {
            setOptionsOpen(false);
          }}
          onShortPressRelease={() => {
            setOptionsOpen(prevState => !prevState);
          }}
          PressableProps={
            optionsOpen ? { hitSlop: { top: 30, right: 30 } } : null
          }>
          <View>
            <View
              style={{
                ...styles.controller_button,
                width: itemWidth,
                height: itemHeight,
              }}>
              <Text style={styles.controller_button_text}>{input}</Text>
            </View>

            {optionsOpen && (
              <ControllerItemOptions
                id={id}
                setItemWidthFunc={setItemWidth}
                setItemHeightFunc={setItemHeight}
              />
            )}
          </View>
        </Draggable>
      )}
      {type == 'stick' && (
        <Draggable
          x={xPos}
          y={yPos}
          minX={0}
          minY={0}
          maxX={maxX}
          maxY={maxY}
          onDragRelease={(_, _1, bounds) =>
            dispatch(
              updateItemPosition({ id, xPos: bounds.left, yPos: bounds.top }),
            )
          }
          onDrag={() => {
            setOptionsOpen(false);
          }}
          onShortPressRelease={() => {
            setOptionsOpen(prevState => !prevState);
          }}
          PressableProps={
            optionsOpen ? { hitSlop: { top: 30, right: 30 } } : null
          }>
          <View>
            <View style={styles.layout_stick_outer}>
              <View style={styles.layout_stick_inner}>
                <Text style={styles.controller_button_text}>{input}</Text>
              </View>
            </View>

            {optionsOpen && <ControllerItemOptions id={id} />}
          </View>
        </Draggable>
      )}
    </>
  );
}
