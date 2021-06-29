import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import CompleteProfile from '../screens/CompleteProfile';
import PhoneNumber from '../screens/PhoneNumber';
import OTPVerification from '../screens/OTPVerification';
import Landing from '../screens/Landing';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Landing"
                component={Landing}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="PhoneNumber"
                component={PhoneNumber}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="OTPVerification"
                component={OTPVerification}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="CompleteProfile"
                component={CompleteProfile}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={AppNavigation}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AuthNavigation;
