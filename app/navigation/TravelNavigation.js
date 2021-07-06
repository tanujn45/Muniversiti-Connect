import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TravelHome from "../screens/TravelHome";
import TravelInfo from "../screens/TravelInfo";

const Stack = createStackNavigator();

const TravelNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TravelHome"
        component={TravelHome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TravelInfo"
        component={TravelInfo}
      />
    </Stack.Navigator>
  );
};

export default TravelNavigation;
