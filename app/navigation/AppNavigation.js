import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import CourseInfo from "../screens/CourseInfo";
import colors from "../constants/colors";
import CourseNavigation from "./CourseNavigation";
import TravelNavigation from "./TravelNavigation";

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
          backgroundColor: colors.black,
          borderTopWidth: 0,
          // borderRadius: 10,
        },
      }}
      tabBar={(props) => {
        return <BottomTabBar {...props} />;
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
        name="TravelNavigation"
        component={TravelNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome name="plane" color={color} size={30} />
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
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    // borderRadius: 8,
    overflow: "hidden",
  },
});

export default AppNavigation;
