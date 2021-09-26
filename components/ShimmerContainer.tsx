import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Animated, Easing, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { systemColors } from '../system';

const screenWidth = Dimensions.get('screen').width;
const start = -1;
const end = 1;
const duration = 2000;
const colors = [systemColors.shimmerDefault, systemColors.shimmerGradient, systemColors.shimmerDefault];
const locations = [0.3, 0.5, 0.7];
const animation = new Animated.Value(start);

const runAnimation = () => {
  animation.setValue(start);
  Animated.timing(animation, {
    toValue: end,
    duration,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(runAnimation);
};

const linear = animation.interpolate({
  inputRange: [start, end],
  outputRange: [-screenWidth, screenWidth],
});

runAnimation();

const ShimmerContainer = (props: ViewProps): JSX.Element => {
  const { style } = props;
  const [positionX, setPositionX] = useState(null);
  let viewRef: any = null;
  return (
    <View
      style={[styles.shimmer, style]}
      ref={(ref) => {
        viewRef = ref;
      }}
      onLayout={() => {
        if (viewRef) {
          viewRef.measure((_x: any, _y: any, _width: any, _height: any, pageX: any, _pageY: any) => {
            setPositionX(pageX);
          });
        }
      }}>
      {positionX !== null && (
        <Animated.View
          style={{
            flex: 1,
            left: -positionX,
            transform: [{ translateX: linear }],
          }}>
          <LinearGradient
            style={{ flex: 1, width: screenWidth }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={locations}
            colors={colors}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  shimmer: {
    overflow: 'hidden',
    backgroundColor: systemColors.shimmerDefault,
  },
});

export default ShimmerContainer;
