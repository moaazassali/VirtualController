import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';

import { addItem, updateItemPosition } from '../../../redux/profilesSlice';

import ControllerItemOptions from './ControllerItemOptions';
import Draggable from '../../DraggableCustom';

import styles from './styles';

export function ListControllerItem({ input }) {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(addItem({ input }))}
      style={styles.controller_button}>
      <Text style={styles.controller_button_text}>{input}</Text>
    </Pressable>
  );
}

export function LayoutControllerItem({ input, id, xPos, yPos, maxX, maxY }) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
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
      PressableProps={optionsOpen ? { hitSlop: { top: 30, right: 30 } } : null}>
      <View>
        <View style={styles.controller_button}>
          <Text style={styles.controller_button_text}>{input}</Text>
        </View>

        {optionsOpen && <ControllerItemOptions id={id} />}
      </View>
    </Draggable>
  );
}
