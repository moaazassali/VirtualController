import React, { useState, useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import dgram from 'react-native-udp';

import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProfile } from '../redux/profilesSlice';
import { showScreensMenu } from '../redux/uiSlice';
import { selectAddress, selectPort } from '../redux/networkingSlice';

import Spacer from '../components/Spacer';
import AddressInput from '../components/ConnectComps/AddressInput';
import ProfileList from '../components/ConnectComps/ProfileList';
import ConnectButton from '../components/ConnectComps/ConnectButton';
import NetworkingControllerButton from '../components/ControllerComponents/ControllerButtons/NetworkingControllerButton';
import NetworkingControllerStick from '../components/ControllerComponents/ControllerSticks/NetworkingControllerStick';

// Network setup initialization
const client = dgram.createSocket('udp4');

client.bind();

client.once('listening', function () {
  const address = client.address();
  console.log(address);
  console.log(`Client is listening on ${address.address}:${address.port}`);
});

client.on('error', err => {
  console.log('Error in UDP client server: \n' + err.message);
});

export default function ConnectScreen() {
  const [controllerViewOpen, setControllerViewOpen] = useState(false);

  const dispatch = useDispatch();
  const selectedProfile = useSelector(selectSelectedProfile);
  const address = useSelector(selectAddress);
  const port = useSelector(selectPort);

  const addedItems = selectedProfile.layout.map(item => {
    if (item.input == 'RS' || item.input == 'LS')
      return (
        <NetworkingControllerStick
          id={item.id}
          input={item.input}
          text={item.input}
          xPos={item.xPos}
          yPos={item.yPos}
          stickDiameter={150}
          maxDistance={25}
          outerBorderWidth={2}
          outerBorderColor="#bb86fc"
          innerBackgroundColor="#cf6679"
          fontSize={24}
          fontWeight="700"
          fontColor="rgba(255,255,255,0.87)"
          client={client}
          address={address}
          port={port}
          key={item.id}
        />
      );
    else
      return (
        <NetworkingControllerButton
          id={item.id}
          input={item.input}
          text={item.input}
          xPos={item.xPos}
          yPos={item.yPos}
          width={item.width}
          height={item.height}
          borderWidth={2}
          borderRadius={10}
          borderColor="#bb86fc"
          backgroundColor="transparent"
          fontSize={24}
          fontWeight="700"
          fontColor="rgba(255,255,255,0.87)"
          client={client}
          address={address}
          port={port}
          key={item.id}
        />
      );
  });

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
              client={client}
            />
          </View>
        </>
      ) : (
        <>{addedItems}</>
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
