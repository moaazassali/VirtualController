import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { setAddress } from '../../redux/networkingSlice';

import Spacer from '../Spacer';

import styles, { placeholderColor } from './styles';

export default function AddressInput() {
  const [addressParts, setaddressParts] = useState(['192', '168', '70', '129']);

  const dispatch = useDispatch();

  const editAddressParts = (text, index) => {
    const newArr = [...addressParts];
    newArr[index] = text;
    setaddressParts(newArr);
  };

  useEffect(() => {
    dispatch(setAddress({ address: addressParts.join('.') }));
  }, [addressParts]);

  return (
    <View style={styles.address_container}>
      <Text style={styles.address_container_title}>
        Enter your server's IP address
      </Text>

      <Spacer height={20} />

      <View style={styles.addressParts_container}>
        <TextInput
          value={addressParts[0]}
          onChangeText={text =>
            /^[0-9]*$/.test(text) && editAddressParts(text, 0)
          }
          placeholder="###"
          placeholderTextColor={placeholderColor}
          maxLength={3}
          disableFullscreenUI
          style={styles.addressParts_input}
        />
        <Text style={styles.addressParts_separator}>.</Text>
        <TextInput
          value={addressParts[1]}
          onChangeText={text =>
            /^[0-9]*$/.test(text) && editAddressParts(text, 1)
          }
          placeholder="###"
          placeholderTextColor={placeholderColor}
          maxLength={3}
          disableFullscreenUI
          style={styles.addressParts_input}
        />
        <Text style={styles.addressParts_separator}>.</Text>
        <TextInput
          value={addressParts[2]}
          onChangeText={text =>
            /^[0-9]*$/.test(text) && editAddressParts(text, 2)
          }
          placeholder="###"
          placeholderTextColor={placeholderColor}
          maxLength={3}
          disableFullscreenUI
          style={styles.addressParts_input}
        />
        <Text style={styles.addressParts_separator}>.</Text>
        <TextInput
          value={addressParts[3]}
          onChangeText={text =>
            /^[0-9]*$/.test(text) && editAddressParts(text, 3)
          }
          placeholder="###"
          placeholderTextColor={placeholderColor}
          maxLength={3}
          disableFullscreenUI
          style={styles.addressParts_input}
        />
      </View>
    </View>
  );
}
