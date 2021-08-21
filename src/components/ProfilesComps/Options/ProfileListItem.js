import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useDispatch } from 'react-redux';
import { selectProfile } from '../../../redux/profilesSlice';
import { hideScreensMenu } from '../../../redux/uiSlice';

import Spacer from '../../Spacer';
import DeleteProfileModal from './DeleteProfileModal';

import { stateStyles } from '../../../styles/GlobalStyles';

import styles, { spacerColor, deleteIconColor } from './styles';

export default function ProfileListItem({ id, name, openEditingViewFunc }) {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => {
          dispatch(selectProfile({ id }));
          openEditingViewFunc();
          dispatch(hideScreensMenu());
        }}
        style={({ pressed }) => [
          styles.item_profile_button,
          pressed ? stateStyles.pressing : null,
        ]}>
        <Text style={styles.item_profile_button_text}>{name}</Text>
      </Pressable>

      <Spacer
        width={1}
        height={40}
        backgroundColor={spacerColor}
        paddingHorizontal={5}
      />

      <Pressable
        onPress={toggleModal}
        style={({ pressed }) => [
          styles.item_delete_button,
          pressed ? stateStyles.pressing : null,
        ]}>
        <Ionicons name="trash-outline" size={22} color={deleteIconColor} />
      </Pressable>

      <DeleteProfileModal
        visible={modalOpen}
        name={name}
        toggleModalFunc={toggleModal}
      />
    </View>
  );
}
