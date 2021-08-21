import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectProfilesList,
  deleteProfile,
} from '../../../redux/profilesSlice';

import Spacer from '../../Spacer';

export default function DeleteProfileModal({
  visible,
  name,
  toggleModalFunc,
  children,
  onClose,
}) {
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

const styles = StyleSheet.create({
  modal_overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modal_card: {
    backgroundColor: darkThemeProps.background,
    width: '50%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: darkThemeProps.error,
  },
  modal_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textProps.emphasis.high,
    textAlign: 'center',
  },
  modal_button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: textProps.emphasis.high,
  },
  modal_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
});
