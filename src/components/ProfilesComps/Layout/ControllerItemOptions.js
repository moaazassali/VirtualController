import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { deleteItem } from '../../../redux/profilesSlice';

import styles, { optionsIconColor } from './styles';

export default function ControllerItemOptions({ id }) {
  const dispatch = useDispatch();

  return (
    <View pointerEvents="box-none" style={styles.itemOptions_container}>
      <View style={styles.itemOptions_top}>
        <Pressable
          onPress={() => dispatch(deleteItem({ id }))}
          style={styles.itemOptions_delete}>
          <Ionicons name="trash-outline" size={20} color={optionsIconColor} />
        </Pressable>

        <Pressable style={styles.itemOptions_expand}>
          <Ionicons name="expand" size={30} color={optionsIconColor} />
        </Pressable>
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
  );
}
