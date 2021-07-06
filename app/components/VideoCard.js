import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Card from "./Card";
import AppText from "./AppText";
import colors from "../constants/colors";
import AppButton from "./AppButton";
import AppHeading2 from "./AppHeading2";

const VideoCard = ({ vidData, vidIndex, onPress, style }) => {
  return (
    <View style={{ backgroundColor: colors.black }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[style, { paddingHorizontal: 20 }]}
      >
        <Card>
          <View style={styles.videoSection}>
            <View style={styles.videoThumbnail}>
              <Image
                style={styles.thumbnailImg}
                source={{
                  uri: vidData.uri,
                }}
              />
              <View
                style={{
                  borderTopLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  paddingHorizontal: 7,
                  paddingVertical: 2,
                  backgroundColor: colors.transparent4,
                }}
              >
                <AppText
                  style={{ fontFamily: "PlusJakartaSans-Bold", fontSize: 13 }}
                  fontColor={colors.white}
                >
                  {vidData.duration}
                </AppText>
              </View>
            </View>
            <View style={styles.videoInfo}>
              <AppHeading2 style={{ fontSize: 18 }}>
                {vidData.lessonTitle}
              </AppHeading2>
              <AppText
                fontColor={colors.grey4}
                style={{
                  fontFamily: "PlusJakartaSans-Bold",
                  textTransform: "uppercase",
                  fontSize: 12,
                }}
              >
                Lesson {`${vidIndex + 1}`}
              </AppText>
            </View>
          </View>
          <AppText style={{ marginTop: 20 }} fontColor={colors.transparent3}>
            {vidData.description}
          </AppText>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  videoBlock: {
    width: "100%",
    backgroundColor: colors.grey,
    borderRadius: 8,
    paddingTop: 5,
    marginBottom: 25,
  },
  videoInfo: {
    width: 160,
    marginLeft: 16,
  },
  videoThumbnail: {
    width: 150,
    height: 80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  thumbnailImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
    borderRadius: 4,
  },
  videoSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default VideoCard;
