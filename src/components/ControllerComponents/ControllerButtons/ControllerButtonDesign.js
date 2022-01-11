import React from 'react';
import { View, Text } from 'react-native';

export default function ControllerButtonDesign({
  text,
  width,
  height,
  borderWidth,
  borderRadius,
  borderColor,
  backgroundColor,
  fontSize,
  fontWeight,
  fontColor,
}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        borderWidth,
        borderRadius,
        borderColor,
        backgroundColor,
      }}>
      <Text style={{ fontSize, fontWeight, color: fontColor }}>{text}</Text>
    </View>
  );
}
