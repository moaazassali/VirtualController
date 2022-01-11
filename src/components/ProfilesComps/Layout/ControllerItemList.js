import React from 'react';
import { View, FlatList } from 'react-native';

import { ListControllerItem } from './ControllerItem';
import Spacer from '../../Spacer';
import styles from './styles';

const DefaultButtons = [
  {
    type: 'button',
    input: 'A',
    text: 'A',
  },
  {
    type: 'button',
    input: 'B',
    text: 'B',
  },
  {
    type: 'button',
    input: 'X',
    text: 'X',
  },
  {
    type: 'button',
    input: 'Y',
    text: 'Y',
  },
  {
    type: 'button',
    input: 'LB',
    text: 'LB',
  },
  {
    type: 'button',
    input: 'RB',
    text: 'RB',
  },
  {
    type: 'button',
    input: 'LT',
    text: 'LT',
  },
  {
    type: 'button',
    input: 'RT',
    text: 'RT',
  },
  {
    type: 'button',
    input: 'S',
    text: 'S',
  },
  {
    type: 'stick',
    input: 'LS',
    text: 'LS',
  },
  {
    type: 'stick',
    input: 'RS',
    text: 'RS',
  },
];

export default function ControllerItemList() {
  return (
    <View style={styles.list_container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DefaultButtons}
        renderItem={({ item }) => (
          <ListControllerItem
            type={item.type}
            input={item.input}
            text={item.text}
          />
        )}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        keyExtractor={item => item.input}
        persistentScrollbar
      />
    </View>
  );
}
