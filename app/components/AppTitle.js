import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppTitle = ({ fontColor = colors.white, style, children }) => {
    return (
        <Text style={[styles.text, { ...style }, { color: fontColor }]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontFamily: 'PlusJakartaSans-Bold'
    }
});

export default AppTitle;
