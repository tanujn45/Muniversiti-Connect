import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import AppHeading from "../components/AppHeading";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const TravelHome = ({ navigation }) => {
  const data = [
    {
      id: 1,
      uri: "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg",
      description: "The Most Beautiful Places in the World",
    },
    {
      id: 2,
      uri: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg",
      description: "The Most Beautiful Places in the World",
    },
    {
      id: 3,
      uri: "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg",
      description: "The Most Beautiful Places in the World",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        snapToStart={"start"}
        snapToInterval={height}
        decelerationRate={"fast"}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View style={{ position: "relative", marginBottom: 70 }}>
              <Image
                source={{
                  uri: item.uri,
                }}
                style={{ width: width, height: height - 70 }}
              />
              <LinearGradient
                // Background Linear Gradient
                colors={[colors.transparent, colors.black]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: height / 2,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 20,
                  left: 20,
                  bottom: 80,
                }}
              >
                <AppHeading
                  style={{ marginBottom: 30 }}
                  fontColor={colors.white}
                >
                  {item.description}
                </AppHeading>
                <AppButton
                  bgColor={colors.primary}
                  onPress={() => navigation.navigate("TravelInfo")}
                  title="Explore"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    height: height,
    backgroundColor: colors.black,
  },
});

export default TravelHome;
