import React from "react";
import {
  Text,
  StyleSheet,
  PixelRatio,
  Dimensions,
  Platform,
} from "react-native";
import colors from "../constants/colors";
import normalize from "../config/responsiveFonts";

const AppTitle = ({ fontColor = colors.white, style, children }) => {
  return (
    <Text style={[styles.text, { ...style }, { color: fontColor }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: Platform.OS === "ios" ? 34 : 32,
  },
});

export default AppTitle;
