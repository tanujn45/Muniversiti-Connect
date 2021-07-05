import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppHeading from "../components/AppHeading";
import AppHeading2 from "../components/AppHeading2";
import AppText from "../components/AppText";
import AppTitle from "../components/AppTitle";
import colors from "../constants/colors";

const BrandDoc = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppTitle>Tanuj Namdeo</AppTitle>
      <AppHeading>Tanuj Namdeo</AppHeading>
      <AppHeading2>Tanuj Namdeo</AppHeading2>
      <AppText>Tanuj Namdeo</AppText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default BrandDoc;
