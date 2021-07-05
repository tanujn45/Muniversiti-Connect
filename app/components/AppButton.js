import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const AppButton = ({
  bgColor = colors.grey,
  fontColor = colors.white,
  icon,
  title = "Continue",
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnContainer, { backgroundColor: bgColor }, style]}
      onPress={onPress}
    >
      {icon === "google" && icon ? (
        <Image
          source={require("../assets/icons/google.png")}
          style={styles.icon}
        />
      ) : (
        <></>
      )}
      {icon === "facebook" && icon ? (
        <AntDesign
          name="facebook-square"
          color={colors.white}
          size={28}
          style={styles.icon}
        />
      ) : (
        <></>
      )}
      <Text style={[styles.btnTitle, { color: fontColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 7,
    marginBottom: 15,
    flexDirection: "row",
    height: 55,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Medium",
    textTransform: "uppercase",
  },
  icon: {
    marginRight: 7,
    width: 28,
    height: 28,
  },
});

export default AppButton;
