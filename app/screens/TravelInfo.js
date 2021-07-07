import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import colors from "../constants/colors";

import AppTitle from "../components/AppTitle";
import AppText from "../components/AppText";
import AppHeading2 from "../components/AppHeading2";
import Pill from "../components/Pill";
import AppButton from "../components/AppButton";

const CAROUSEL_HEIGHT = 400;

const TravelInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/temp/muntraining.png")}
        style={[StyleSheet.absoluteFill, styles.img]}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 90,
          paddingHorizontal: 20,
          zIndex: 1,
          backgroundColor: colors.grey3,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <AppText
            style={{ textAlign: "center", fontFamily: "PlusJakartaSans-Bold" }}
          >
            Rs 10,000/Person
          </AppText>
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
          <AppButton
            bgColor={colors.primary}
            style={{ marginBottom: 0 }}
            title="Buy now"
          />
        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.placeholder} />
        <View
          style={[
            {
              backgroundColor: colors.black,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingTop: 40,
            },
            styles.content,
          ]}
        >
          <AppTitle>Summer in Spain</AppTitle>
          <AppHeading2 style={{ marginVertical: 7 }} fontColor={colors.primary}>
            Barcelona, Spain
          </AppHeading2>
          <AppText
            style={{
              textTransform: "uppercase",
              fontFamily: "PlusJakartaSans-Bold",
              marginTop: 20,
              marginBottom: 15,
            }}
          >
            Tour Itinerary
          </AppText>
          <AppText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. {"\n\n"}{" "}
            Exercitation veniam consequat sunt nostrud amet.Velit duis enim
            velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.Velit duis enim
            velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.Velit duis enim
            velit mollit.
          </AppText>
        </View>
        <View style={{ height: 90 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  placeholder: {
    height: CAROUSEL_HEIGHT - 50,
  },
  content: {
    padding: 20,
  },
});

export default TravelInfo;
