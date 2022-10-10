import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, AntDesign } from "@expo/vector-icons";
import { captureRef } from "react-native-view-shot";

import { styles } from "./styles";

import stLogo from "../assets/images/st_logo.png";

export default function Main() {
  const translateX = useSharedValue(0);

  const [captured, setCaptured] = useState("");

  const contentRef = useRef(null);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      console.log(e.translationX);

      if (Math.abs(e.translationX) <= 255) {
        translateX.value = Math.abs(e.translationX);
      }
    })
    .onEnd((e) => {
      translateX.value = withTiming(0, { duration: 600 });
    });

  const cardWith = 375;

  const onLoadEnd = () => {
    captureRef(contentRef.current, {
      format: "jpg",
      quality: 0.8,
    }).then((uri) => {
      if (!captured) {
        setCaptured(uri);
      }
    }, console.error);
  };

  const topAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(translateX.value, [0, cardWith], [cardWith, 0]),
    shadowOffset: {
      height: 0,
      width: interpolate(translateX.value, [0, cardWith], [5, 40]),
    },
    shadowColor: "black",
    shadowRadius: interpolate(translateX.value, [0, cardWith], [5, 40]),
    shadowOpacity: interpolate(translateX.value, [0, cardWith], [1, 0]),
  }));

  const innerEffectAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(translateX.value, [0, 80], [60, 180]),
  }));

  const flipEffectAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(translateX.value, [60, cardWith], [0, 180]),
    height: interpolate(translateX.value, [60, cardWith], [180, 210]),
  }));

  const inShadowEffectAnimatedStyle = useAnimatedStyle(() => ({
    shadowOffset: {
      height: 0,
      width: interpolate(translateX.value, [0, cardWith], [0, -20]),
    },
    shadowColor: "black",
    shadowRadius: interpolate(translateX.value, [0, cardWith], [0, 80]),
    shadowOpacity: interpolate(translateX.value, [0, 100], [0.2, 0]),
  }));

  const mirrorAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(translateX.value, [0, cardWith], [0, -50]) },
      { scaleX: -1 },
    ],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.cardContent}>
          <View style={styles.iconsContent}>
            <Feather name="trash-2" size={30} color="white" />
            <Feather name="trash-2" size={30} color="white" />
          </View>
          <Animated.View style={[styles.topView, topAnimatedStyle]}>
            <View ref={contentRef} style={styles.topViewContent}>
              <Image source={stLogo} onLoadEnd={onLoadEnd} style={styles.logo} />
              <Text numberOfLines={1} style={styles.title}>
                Stranger
              </Text>
              <View style={styles.bottomContent}>
                <View style={styles.infoContent}>
                  <Feather name="database" size={17} color="white" />
                  <Text style={styles.infoText}>4 MB</Text>
                </View>
                <View style={styles.infoContent}>
                  <AntDesign name="calendar" size={17} color="white" />
                  <Text style={styles.infoText}>8 days ago</Text>
                </View>
                <View style={styles.infoContent}>
                  <Feather name="clock" size={17} color="white" />
                  <Text style={styles.infoText}>3s</Text>
                </View>
              </View>
            </View>
            <Animated.View style={[styles.innerEffect, innerEffectAnimatedStyle]}>
              <LinearGradient
                style={styles.gradient}
                colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </Animated.View>
            {/* <Animated.View style={[styles.flipEffect, flipEffectAnimatedStyle]}>
              <LinearGradient
                style={styles.gradient}
                colors={["rgba(0, 0, 0, 0.8)", "transparent", "rgba(0, 0, 0, 0.8)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
              <Animated.View style={[styles.mirrorView, inShadowEffectAnimatedStyle]}>
                {captured && (
                  <Animated.Image
                    source={{ uri: captured }}
                    style={[styles.mirror, mirrorAnimatedStyle]}
                  />
                )}
              </Animated.View>
            </Animated.View> */}
          </Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
}
