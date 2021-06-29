import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppPopUpText = (props) => {
    return (
        <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold',
        color: fontColor.black
    }
});

export default AppPopUpText;
