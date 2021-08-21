import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { selectProfilesList } from '../../../redux/profilesSlice';

import Spacer from '../../Spacer';
import ProfileListItem from './ProfileListItem';

import styles, { spacerColor } from './styles';

export default function ProfileList({ openEditingViewFunc }) {
  const profilesList = useSelector(selectProfilesList);

  return (
    <View style={styles.card}>
      <Text style={styles.card_title}>Edit an existing profile</Text>

      <Spacer height={20} />
      {profilesList.length < 1 && (
        <Text style={styles.noProfiles_text}>
          No profile has been created yet!
        </Text>
      )}

      <FlatList
        data={profilesList}
        renderItem={({ item }) => (
          <ProfileListItem
            id={item.id}
            name={item.name}
            openEditingViewFunc={openEditingViewFunc}
          />
        )}
        ItemSeparatorComponent={() => (
          <Spacer height={1} backgroundColor={spacerColor} />
        )}
        keyExtractor={(_, index) => index}
        persistentScrollbar
        contentContainerStyle={styles.profiles_flatlist}
      />
    </View>
  );
}
