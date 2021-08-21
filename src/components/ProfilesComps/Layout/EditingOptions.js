import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  selectSelectedProfile,
  updateLayout,
  deselectProfile,
} from '../../../redux/profilesSlice';
import { showScreensMenu } from '../../../redux/uiSlice';

import Spacer from '../../Spacer';
import ControllerItemList from './ControllerItemList';

import styles, { optionsIconColor } from './styles';

export default function EditingOptions({ exitFunc }) {
  const [hidden, setHidden] = useState(false);

  const dispatch = useDispatch();
  const selectedProfile = useSelector(selectSelectedProfile);

  return (
    <>
      {!hidden && (
        <>
          <ControllerItemList />

          <View pointerEvents="box-none" style={styles.options_container}>
            <Pressable
              onPress={() => {
                exitFunc();
                dispatch(deselectProfile());
                dispatch(showScreensMenu());
              }}
              style={styles.options_button}>
              <Ionicons
                name="exit-outline"
                size={16}
                color={optionsIconColor}
              />
              <Spacer width={2} />
              <Text style={styles.options_button_text}>Exit</Text>
            </Pressable>

            <Spacer width={5} />

            <Pressable
              onPress={() => {
                console.log(selectedProfile);
                dispatch(
                  updateLayout({
                    id: selectedProfile.id,
                    newLayout: selectedProfile.layout,
                  }),
                );
              }}
              style={styles.options_button}>
              <Ionicons
                name="download-outline"
                size={16}
                color={optionsIconColor}
              />
              <Spacer width={2} />
              <Text style={styles.options_button_text}>Save Layout</Text>
            </Pressable>
          </View>
        </>
      )}

      <View
        pointerEvents="box-none"
        style={styles.toggleOptions_button_container}>
        <Pressable
          onPress={() => setHidden(prevState => !prevState)}
          style={styles.toggleOptions_button}>
          <Ionicons
            name={hidden ? 'open-outline' : 'close'}
            size={16}
            color={optionsIconColor}
          />
          {!hidden && (
            <>
              <Spacer width={2} />
              <Text style={styles.options_button_text}>Hide options</Text>
            </>
          )}
        </Pressable>
      </View>
    </>
  );
}
