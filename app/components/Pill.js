import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import AppText from "./AppText";

const Pill = ({ text }) => {
  return (
    <View style={styles.pill}>
      <AppText style={styles.pillText}>{text}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    alignSelf: "flex-start",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
  },
  pillText: {
    backgroundColor: colors.grey,
    fontFamily: "PlusJakartaSans-Medium",
    paddingVertical: 7,
    paddingHorizontal: 13,
    fontSize: 14,
  },
});

export default Pill;
