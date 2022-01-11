import React, { useRef } from 'react';
import { Animated } from 'react-native';

import { PanGestureHandler, State } from 'react-native-gesture-handler';

export function Draggable({
  children,
  xPos,
  yPos,
  minX,
  minY,
  maxX,
  maxY,
  onDrag,
  onDragRelease,
}) {
  const pan = useRef(new Animated.ValueXY()).current;
  const lastOffset = useRef({ x: 0, y: 0 }).current;

  const onPanGestureEvent = event => {
    // Calculates the position of the draggable from its origin position
    // and clamps calculated position to be within min/max range
    const xPosFromOrigin = Math.min(
      maxX,
      Math.max(minX, event.nativeEvent.translationX + lastOffset.x),
    );
    const yPosFromOrigin = Math.min(
      maxY,
      Math.max(minY, event.nativeEvent.translationY + lastOffset.y),
    );

    /*
     * If the draggable position from origin exceeds the specific max,
     * the draggable will stop responding to greater translations in the same direction.
     * Because of precision issues with how frequently the phone updates translation value,
     * sometimes it goes from < maxX to > maxX so it doesn't update pan.x and remains stuck
     * at the value that was < maxX before it became > maxX.
     * To fix that, whenever the touch exceeds the specific max/min range,
     * the draggable moves to the respective max/min position exactly.
     */
    xPosFromOrigin < maxX && xPosFromOrigin > minX
      ? pan.x.setValue(event.nativeEvent.translationX)
      : xPosFromOrigin > 0
      ? pan.x.setValue(maxX - lastOffset.x)
      : pan.x.setValue(minX - lastOffset.x);

    yPosFromOrigin < maxY && yPosFromOrigin > minY
      ? pan.y.setValue(event.nativeEvent.translationY)
      : yPosFromOrigin > 0
      ? pan.y.setValue(maxY - lastOffset.y)
      : pan.y.setValue(minY - lastOffset.y);

    const extras = {
      xPosFromOrigin: xPosFromOrigin,
      yPosFromOrigin: yPosFromOrigin,
    };

    if (onDrag) onDrag(event.nativeEvent, extras);
  };

  const onPanHandlerStateChange = event => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      // Bring back the draggable to origin
      pan.setValue({ x: 0, y: 0 });

      const extras = {
        xPosFromOrigin: 0,
        yPosFromOrigin: 0,
      };

      if (onDragRelease) onDragRelease(event.nativeEvent, extras);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onPanGestureEvent}
      onHandlerStateChange={onPanHandlerStateChange}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          left: xPos,
          top: yPos,
        }}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
}
