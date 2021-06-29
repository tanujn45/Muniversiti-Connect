import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../constants/colors';

const AppText = ({ fontColor = colors.white, style, children }) => {
    return (
        <Text style={[styles.text, { ...style }, { color: fontColor }]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'PlusJakartaSans-Light',
        color: colors.black,
        lineHeight: 22
    }
});

export default AppText;
