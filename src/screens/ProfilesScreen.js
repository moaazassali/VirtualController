import React, { useState, useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectStaticProfileCopy,
  setViewDimensions,
} from '../redux/profilesSlice';
import { setCurrentScreen, showScreensMenu } from '../redux/uiSlice';

import Spacer from '../components/Spacer';
import CreateProfileForm from '../components/ProfilesComps/Options/CreateProfileForm';
import ProfileList from '../components/ProfilesComps/Options/ProfileList';
import { LayoutControllerItem } from '../components/ProfilesComps/Layout/ControllerItem';
import EditingOptions from '../components/ProfilesComps/Layout/EditingOptions';

let viewWidth = 0;
let viewHeight = 0;

export default function ProfilesScreen() {
  const [editingViewOpen, setEditingViewOpen] = useState(false);

  const dispatch = useDispatch();
  const staticProfileCopy = useSelector(selectStaticProfileCopy);

  const addedItems = staticProfileCopy.layout.map(item => (
    <LayoutControllerItem
      input={item.input}
      id={item.id}
      xPos={item.xPos}
      yPos={item.yPos}
      maxX={viewWidth}
      maxY={viewHeight}
      key={item.id}
    />
  ));

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleBackButtonClick = () => {
    setEditingViewOpen(false);
    dispatch(showScreensMenu());
    return true;
  };

  return (
    <View style={styles.container}>
      {editingViewOpen && (
        <>
          <EditingOptions exitFunc={() => setEditingViewOpen(false)} />
          <View
            style={styles.addedItems_container}
            onLayout={event => {
              viewWidth = event.nativeEvent.layout.width;
              viewHeight = event.nativeEvent.layout.height;
              dispatch(
                setViewDimensions({ width: viewWidth, height: viewHeight }),
              );
            }}>
            {addedItems}
          </View>
        </>
      )}

      {!editingViewOpen && (
        <View style={{ padding: 10, flexDirection: 'row' }}>
          <ProfileList openEditingViewFunc={() => setEditingViewOpen(true)} />
          <Spacer width={10} />
          <CreateProfileForm />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#121212',
  },
  addedItems_container: {
    flex: 1,
  },
});
