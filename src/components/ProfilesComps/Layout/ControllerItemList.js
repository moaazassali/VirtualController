import React from 'react';
import { View, FlatList } from 'react-native';

import { ListControllerItem } from './ControllerItem';
import Spacer from '../../Spacer';
import styles from './styles';

const DefaultButtons = [
  {
    input: 'A',
  },
  {
    input: 'B',
  },
  {
    input: 'X',
  },
  {
    input: 'Y',
  },
  {
    input: 'LB',
  },
  {
    input: 'RB',
  },
];

export default function ControllerItemList() {
  return (
    <View style={styles.list_container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DefaultButtons}
        renderItem={({ item }) => <ListControllerItem input={item.input} />}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        keyExtractor={item => item.input}
        persistentScrollbar
      />
    </View>
  );
}
