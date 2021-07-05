import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import CourseInfo from "../screens/CourseInfo";
import colors from "../constants/colors";
import CourseNavigation from "./CourseNavigation";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        showLabel: false,
        style: {
          // borderTopColor: "#66666666",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          borderRadius: 10,
        },
      }}
      tabBar={(props) => {
        return (
          <BlurView
            style={styles.tabBarStyles}
            blurType="dark"
            blurAmount={10}
            blurRadius={25}
            overlayColor="black"
          >
            <BottomTabBar {...props} />
          </BlurView>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={CourseNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <MaterialIcons
                color={color}
                size={30}
                name="home"
                style={{ textAlignVertical: "center" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CourseInfo}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <MaterialIcons color={color} size={30} name="search" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CourseInfo"
        component={CourseInfo}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <MaterialIcons color={color} size={30} name="person" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyles: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default AppNavigation;
