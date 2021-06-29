import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppHeading2 = ({ fontColor = colors.white, style, children }) => {
    return (
        <Text style={[styles.text, { ...style }, { color: fontColor }]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.black
    }
});

export default AppHeading2;
