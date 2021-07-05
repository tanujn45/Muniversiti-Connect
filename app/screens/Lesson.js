import React, { useRef, useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Video } from "expo-av";
import colors from "../constants/colors";
import AppHeading2 from "../components/AppHeading2";
import AppText from "../components/AppText";
import VideoCard from "../components/VideoCard";

const Lesson = () => {
  const uri = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        orientation="landscape"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.lessonDescription}>
        <AppHeading2>Course Title 01</AppHeading2>
        <AppText
          style={{
            textTransform: "uppercase",
            fontFamily: "PlusJakartaSans-Bold",
            marginTop: 3,
            marginBottom: 7,
          }}
          fontColor={colors.grey2}
        >
          Lesson 01
        </AppText>
        <AppText fontColor={colors.transparent3}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </AppText>
        <AppHeading2 style={{ marginTop: 20 }}>Up Next</AppHeading2>
        <FlatList
          renderItem={() => {
            return <VideoCard />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  lessonDescription: {
    padding: 20,
  },
});

export default Lesson;
