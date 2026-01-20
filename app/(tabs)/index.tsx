import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

export default function LoadingBar(){
  const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 100,
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Loader Track */}
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.bar,
            { transform: [{ translateX }] },
          ]}
        />
      </View>

      {/* Text */}
      <Text style={styles.text}>Loading Deals and More ......</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor :"#fff",
  },
  track: {
    width: 120,
    height: 2,
    backgroundColor: "#973b3b",
    overflow: "hidden",
    marginBottom: 8,
  },
  bar: {
    width: 40,
    height: 2,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 12,
    color: "#555",
  },
});
