import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectProfile,
  selectSelectedProfile,
} from '../../redux/profilesSlice';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { stateStyles } from '../../styles/GlobalStyles';

export default function ProfileListItem({ id, name }) {
  const dispatch = useDispatch();
  const selectedProfile = useSelector(selectSelectedProfile);

  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => dispatch(selectProfile({ id }))}
        style={({ pressed }) => [
          styles.item_profile_button,
          pressed ? stateStyles.pressing : null,
        ]}>
        <Text style={styles.item_profile_button_text}>{name}</Text>
        {selectedProfile.id == id && (
        <Ionicons name="checkmark-circle" style={styles.checkIcon} />
      )}
      </Pressable>
    </View>
  );
}
