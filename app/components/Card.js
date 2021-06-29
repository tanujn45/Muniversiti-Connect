import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Card = ({ children, style, bgColor = colors.grey3 }) => {
    return (
        <View style={[styles.card, { ...style }, { backgroundColor: bgColor }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 20
    }
});

export default Card;
