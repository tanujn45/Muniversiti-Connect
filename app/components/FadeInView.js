import React from 'react';
import { Text, StyleSheet } from 'react-native';
import FadeInView from 'react-native-fade-in-view';
import colors from '../constants/colors';

const MyFadeInComponent = () => (
    <FadeInView duration={1200} style={{ alignItems: 'center' }}>
        <Text style={styles.logo}>UpSkill</Text>
    </FadeInView>
);

const styles = StyleSheet.create({
    logo: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSans-Medium',
        color: colors.black
    }
});
export default MyFadeInComponent;
