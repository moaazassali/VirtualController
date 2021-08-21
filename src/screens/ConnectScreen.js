import React, { useState, useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProfile } from '../redux/profilesSlice';
import { showScreensMenu } from '../redux/uiSlice';

import Spacer from '../components/Spacer';
import AddressInput from '../components/ConnectComps/AddressInput';
import ProfileList from '../components/ConnectComps/ProfileList';
import ConnectButton from '../components/ConnectComps/ConnectButton';
import {
  FunctionalControllerButton,
  FunctionalControllerStick,
} from '../components/ConnectComps/FunctionalControllerItem';

export default function ConnectScreen() {
  const [controllerViewOpen, setControllerViewOpen] = useState(false);

  const dispatch = useDispatch();
  const selectedProfile = useSelector(selectSelectedProfile);

  const addedItems = selectedProfile.layout.map(item => (
    <FunctionalControllerButton
      input={item.input}
      xPos={item.xPos}
      yPos={item.yPos}
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

  // Handle leaving the controller view. Disconnect and go back to main view
  const handleBackButtonClick = () => {
    setControllerViewOpen(false);
    dispatch(showScreensMenu());
    return true;
  };

  return (
    <View pointerEvents="box-none" style={styles.container}>
      {!controllerViewOpen ? (
        <>
          <AddressInput />

          <Spacer height={10} />

          <View style={styles.bottom_cards}>
            <ProfileList />
            <Spacer width={10} />
            <ConnectButton
              openControllerViewFunc={() => setControllerViewOpen(true)}
            />
          </View>
        </>
      ) : (
        <>
          {/* {addedItems} */}
          <View
            onTouchStart={() => console.log(1)}
            style={{ width: 50, height: 50, backgroundColor: 'red' }}
          />
          <View
            onTouchStart={() => console.log(2)}
            style={{ width: 50, height: 50, backgroundColor: 'red' }}
          />
          <FunctionalControllerStick />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  bottom_cards: {
    flex: 1,
    flexDirection: 'row',
  },
});
