import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectProfilesList,
  deleteProfile,
} from '../../../redux/profilesSlice';

import Spacer from '../../Spacer';

import styles from './styles';

export default function DeleteProfileModal({ visible, name, toggleModalFunc }) {
  const dispatch = useDispatch();
  const profilesList = useSelector(selectProfilesList);

  const handleYesPress = () => {
    const profileId = profilesList.find(profile => profile.name == name).id;
    dispatch(deleteProfile({ profileId }));
    toggleModalFunc();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal_overlay}>
        <View style={styles.modal_card}>
          <View>
            <Text style={styles.modal_text}>
              Are you completely sure you want to delete "{name}" profile? All
              stored data for this profile will be lost.
            </Text>

            <Spacer height={30} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Pressable onPress={handleYesPress} style={styles.modal_button}>
                <Text style={styles.modal_button_text}>Yes</Text>
              </Pressable>
              <Pressable onPress={toggleModalFunc} style={styles.modal_button}>
                <Text style={styles.modal_button_text}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
