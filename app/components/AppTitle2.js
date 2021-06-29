import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppTitle2 = (props) => {
    return (
        <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSans-Medium',
        color: colors.black
    }
});

export default AppTitle2;
