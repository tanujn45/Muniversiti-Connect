import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Video, AVPlaybackStatus } from "expo-av";

const VideoPlayer = ({ uri }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
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
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});

export default VideoPlayer;
