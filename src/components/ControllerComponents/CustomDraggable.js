import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function CustomDraggable({
  children,
  xPos = 0,
  yPos = 0,
  minX = -10000,
  maxX = 10000,
  minY = -10000,
  maxY = 10000,
  onDrag,
  onDragRelease,
  reverse = false,
}) {
  const pan = useRef(new Animated.ValueXY()).current;
  const lastOffset = useRef({ x: 0, y: 0 });

  let displacementX = 0;
  let displacementY = 0;

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      // Calculates the displacement of the draggable from its origin position
      // and clamps calculated position to be within min/max range
      displacementX = Math.min(
        maxX - xPos,
        Math.max(minX - xPos, event.translationX + lastOffset.current.x),
      );
      displacementY = Math.min(
        maxY - yPos,
        Math.max(minY - yPos, event.translationY + lastOffset.current.y),
      );

      pan.x.setValue(displacementX);
      pan.y.setValue(displacementY);

      const extras = {
        displacementX,
        displacementY,
        absoluteX: xPos + displacementX,
        absoluteY: yPos + displacementY,
      };

      if (onDrag) onDrag(event, extras);
    })

    .onEnd(event => {
      const extras = {};

      // Bring back the draggable to origin
      if (reverse) {
        pan.setValue({ x: 0, y: 0 });
        extras.displacementX = 0;
        extras.displacementY = 0;
        extras.absoluteX = xPos;
        extras.absoluteY = yPos;
      } else {
        lastOffset.current = {
          x: displacementX,
          y: displacementY,
        };
        extras.displacementX = displacementX;
        extras.displacementY = displacementY;
        extras.absoluteX = xPos + displacementX;
        extras.absoluteY = yPos + displacementY;
      }

      if (onDragRelease) onDragRelease(event, extras);
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          left: xPos,
          top: yPos,
          position: 'absolute',
        }}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
