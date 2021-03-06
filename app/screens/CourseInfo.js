import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import AppTitle from "../components/AppTitle";
import AppHeading2 from "../components/AppHeading2";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import AppButton from "../components/AppButton";
import VideoCard from "../components/VideoCard";
import Pill from "../components/Pill";

const CAROUSEL_HEIGHT = 400;

const CourseInfo = ({ navigation }) => {
  const data = [
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "05:30",
      lessonTitle: "Committees in Model UN",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "09:30",
      lessonTitle: "Point of Information",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "04:21",
      lessonTitle: "Tabling a paper",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "04:21",
      lessonTitle: "Tabling a paper",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 5,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "04:21",
      lessonTitle: "Tabling a paper",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 6,
      uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "04:21",
      lessonTitle: "Tabling a paper",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];

  const Header = () => {
    return (
      <View>
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
          <AppTitle>MUN Training</AppTitle>
          <AppHeading2 style={{ marginVertical: 7 }}>Madhur Oza</AppHeading2>
          <AppText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.
          </AppText>
          <View
            style={{
              flexWrap: "wrap",
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Pill text="Public Speaking" />
            <Pill text="Over 1500  Enrolled" />
          </View>

          <AppButton
            style={{ marginVertical: 15 }}
            bgColor={colors.primary}
            title="Buy Now for Rs 999/-"
          />
          <AppText
            style={{
              textTransform: "uppercase",
              fontFamily: "PlusJakartaSans-Bold",
              marginTop: 20,
              marginBottom: 15,
            }}
          >
            Lessons
          </AppText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/temp/muntraining.png")}
        style={[StyleSheet.absoluteFill, styles.img]}
      />

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        bounces={false}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <VideoCard
              style={{ paddingBottom: 20 }}
              vidData={item}
              vidIndex={index}
              onPress={() => navigation.navigate("Lesson")}
            />
          );
        }}
        ListHeaderComponent={Header}
      />
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
  insideContainer: {
    backgroundColor: colors.black,
  },
  content: {
    padding: 20,
  },
  img: {
    width: "100%",
    height: CAROUSEL_HEIGHT,
  },
});

export default CourseInfo;
