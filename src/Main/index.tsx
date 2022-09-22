import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./styles";

export default function Main() {
  const translateX = useSharedValue(100);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      console.log(e.translationX);

      translateX.value = e.translationX;
    })
    .onEnd((e) => {
      translateX.value = withTiming(0);
    });

  const topAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(Math.abs(translateX.value), [0, 350], [350, 0]),
  }));

  const flipEffectAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(Math.abs(translateX.value), [0, 350], [0, 150]),
    height: interpolate(Math.abs(translateX.value), [0, 350], [150, 170]),
    shadowOffset: {
      height: 0,
      width: 20,
    },
    shadowColor: "black",
    shadowRadius: interpolate(Math.abs(translateX.value), [0, 350], [0, 80]),
    shadowOpacity: interpolate(Math.abs(translateX.value), [0, 350], [1, 0.9]),
  }));

  const inShadowEffectAnimatedStyle = useAnimatedStyle(() => ({
    shadowOffset: {
      height: 0,
      width: interpolate(Math.abs(translateX.value), [0, 350], [0, -20]),
    },
    shadowColor: "black",
    shadowRadius: interpolate(Math.abs(translateX.value), [0, 350], [0, 80]),
    shadowOpacity: interpolate(Math.abs(translateX.value), [0, 350], [1, 0.4]),
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.cardContent}>
          <Animated.View style={[styles.topView, topAnimatedStyle]}>
            <Animated.View style={[styles.flipEffect, flipEffectAnimatedStyle]}>
              <Animated.View
                style={[styles.innerShadowEffect, inShadowEffectAnimatedStyle]}
              ></Animated.View>
            </Animated.View>
          </Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
}
