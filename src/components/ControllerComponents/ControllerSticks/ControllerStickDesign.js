import React from 'react';
import { View, Text } from 'react-native';

export function ControllerStickOuterDesign({
  children,
  diameter,
  borderWidth,
  borderColor,
}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2,
        borderWidth,
        borderColor,
      }}>
      {children}
    </View>
  );
}

export function ControllerStickInnerDesign({
  text,
  diameter,
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
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2,
        backgroundColor,
      }}>
      <Text style={{ fontSize, fontWeight, color: fontColor }}>{text}</Text>
    </View>
  );
}
