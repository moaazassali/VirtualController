import React from 'react';
import { View, Platform } from 'react-native';

import {
  BaseButton,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';

export function PressableTest({ children, input, xPos, yPos }) {
  const onTapHandlerStateChange = event => {
    if (event.nativeEvent.state == State.BEGAN) console.log(input + ' began');
    if (event.nativeEvent.state == State.END) console.log(input + ' ended');
  };

  return Platform.OS == 'ios' ? (
    <View style={{ position: 'absolute', top: xPos, left: yPos }}>
      <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
        <View>{children}</View>
      </TapGestureHandler>
    </View>
  ) : (
    <View style={{ position: 'absolute', top: xPos, left: yPos }}>
      <BaseButton onHandlerStateChange={onTapHandlerStateChange}>
        <View>{children}</View>
      </BaseButton>
    </View>
  );
}
