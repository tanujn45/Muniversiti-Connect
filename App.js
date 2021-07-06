import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import AuthNavigation from "./app/navigation/AuthNavigation";
import CourseInfo from "./app/screens/CourseInfo";
import Lesson from "./app/screens/Lesson";
import BrandDoc from "./app/screens/BrandDoc";
import Welcome from "./app/screens/Welcome";
import PhoneNumber from "./app/screens/PhoneNumber";
import OTPVerification from "./app/screens/OTPVerification";
import CompleteProfile from "./app/screens/CompleteProfile";
import AppNavigation from "./app/navigation/AppNavigation";
import TravelNavigation from "./app/navigation/TravelNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "PlusJakartaSans-Bold": require("./app/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-Light": require("./app/assets/fonts/PlusJakartaSans-Light.ttf"),
    "PlusJakartaSans-Medium": require("./app/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-Regular": require("./app/assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    );
  }
}
