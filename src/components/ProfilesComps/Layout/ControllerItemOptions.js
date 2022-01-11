import React, { useState } from 'react';
import { View, Pressable, TextInput, Modal, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { updateItemDimensions, deleteItem } from '../../../redux/profilesSlice';

import Spacer from '../../Spacer';

import styles, { optionsIconColor, placeholderColor } from './styles';

export default function ControllerItemOptions({
  id,
  setItemWidthFunc,
  setItemHeightFunc,
}) {
  const [resizeOpen, setResizeOpen] = useState(false);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const handleDone = () => {
    const adjustedWidth = width.replace(/^\s+|\s+$/g, '');
    adjustedWidth && setItemWidthFunc(parseInt(adjustedWidth));
    const adjustedHeight = height.replace(/^\s+|\s+$/g, '');
    adjustedHeight && setItemHeightFunc(parseInt(adjustedHeight));
  };

  const dispatch = useDispatch();

  return (
    <>
      <View pointerEvents="box-none" style={styles.itemOptions_container}>
        <View style={styles.itemOptions_top}>
          <Pressable
            onPress={() => dispatch(deleteItem({ id }))}
            style={styles.itemOptions_delete}>
            <Ionicons name="trash-outline" size={20} color={optionsIconColor} />
          </Pressable>

          <View style={{ flexDirection: 'row' }}>
            <Pressable
              style={styles.itemOptions_expand}
              onPress={() => setResizeOpen(prevState => !prevState)}>
              <Ionicons name="expand" size={30} color={optionsIconColor} />
            </Pressable>
          </View>
        </View>

        <View style={styles.itemOptions_bottom}>
          <Pressable style={styles.itemOptions_settings}>
            <Ionicons
              name="settings-outline"
              size={20}
              color={optionsIconColor}
            />
          </Pressable>
        </View>
      </View>

      <Modal visible={resizeOpen} transparent>
        <View style={styles.modal_overlay}>
          <View style={styles.modal_card}>
            <Text style={styles.scale_text}>Width:</Text>
            <Spacer height={15} />
            <TextInput
              value={width}
              onChangeText={setWidth}
              placeholder="Enter width"
              placeholderTextColor={placeholderColor}
              maxLength={5}
              disableFullscreenUI
              style={styles.scale_textinput}
            />
            <Spacer height={15} />
            <Text style={styles.scale_text}>Height:</Text>
            <Spacer height={15} />
            <TextInput
              value={height}
              onChangeText={setHeight}
              placeholder="Enter height"
              placeholderTextColor={placeholderColor}
              maxLength={4}
              disableFullscreenUI
              style={styles.scale_textinput}
            />
            <Spacer height={15} />
            <Pressable
              onPress={() => {
                setResizeOpen(false);
                dispatch(
                  updateItemDimensions({
                    id,
                    width: parseInt(width),
                    height: parseInt(height),
                  }),
                );
                handleDone();
              }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
