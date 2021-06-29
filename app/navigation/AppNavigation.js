import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import CourseInfo from "../screens/CourseInfo";
import TabBar from "../components/TabBar";
import colors from "../constants/colors";
import CourseNavigation from "./CourseNavigation";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 8,
          backgroundColor: colors.grey,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="CourseNavigation"
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

export default AppNavigation;
