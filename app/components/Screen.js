import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

function Screen({ bgColor = colors.black, children }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
});

export default Screen;
