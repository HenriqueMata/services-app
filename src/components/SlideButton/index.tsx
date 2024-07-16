import React from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import colors from "../../../assets/colors";

const SlideButton: React.FC = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const left = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["2%", "50%"],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.slider, { left }]} />
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 0)}
        >
          <Icon name="sunny" size={20} color={colors.secondColor} />
          <Text style={styles.textLight}>Light</Text>
        </Pressable>
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 1)}
        >
          <Icon name="moon-outline" size={20} color={colors.white} />
          <Text style={styles.textDark}>Dark</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 40,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.lighPrimaryColor,
  },
  clickableArea: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textLight: {
    color: colors.secondColor,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  textDark: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  slider: {
    position: "absolute",
    width: "48%",
    height: "90%",
    borderRadius: 25,
    backgroundColor: colors.white,
  },
});

export default SlideButton;
