import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CourseInfo from "../screens/CourseInfo";
import Lesson from "../screens/Lesson";

const Stack = createStackNavigator();

const CourseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CourseInfo"
        component={CourseInfo}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Lesson"
        component={Lesson}
      />
    </Stack.Navigator>
  );
};

export default CourseNavigation;
