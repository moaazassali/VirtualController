import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';

import { createProfile } from '../../../redux/profilesSlice';

import Spacer from '../../Spacer';

import styles, { placeholderColor } from './styles';

export default function CreateProfileForm() {
  const [profileName, setProfileName] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.card_title}>Create a new profile</Text>

      <Spacer height={20} />

      <TextInput
        value={profileName}
        onChangeText={setProfileName}
        placeholder="Enter a name"
        placeholderTextColor={placeholderColor}
        maxLength={20}
        disableFullscreenUI
        style={styles.profileName_input}
      />

      <Spacer height={10} />

      <Pressable
        onPress={() => dispatch(createProfile({ name: profileName }))}
        style={styles.createProfile_button}>
        <Text style={styles.createProfile_button_text}>CREATE</Text>
      </Pressable>
    </View>
  );
}
