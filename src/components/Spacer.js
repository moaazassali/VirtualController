import React from 'react';
import { View } from 'react-native';

export default function Spacer({
  width,
  height,
  backgroundColor,
  paddingHorizontal,
  paddingVertical,
}) {
  return (
    <View style={{ paddingHorizontal, paddingVertical }}>
      <View style={{ width, height, backgroundColor }} />
    </View>
  );
}
