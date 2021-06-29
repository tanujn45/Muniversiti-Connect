import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import AppText from './AppText';
import AppTitle from './AppTitle';
import AppHeading2 from './AppHeading2';
import AppHeading from './AppHeading';

const CourseCard = ({ uri, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.courseBlock}
            activeOpacity={0.8}
        >
            <Image source={{ uri }} style={styles.bgImage} />
            <LinearGradient
                colors={[
                    colors.transparent,
                    colors.transparent,
                    colors.transparent2
                ]}
                style={styles.gradient}
            />
            <View style={styles.text}>
                <AppHeading style={styles.heading}>Lebron James</AppHeading>
                <AppHeading2>Basketball</AppHeading2>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    courseBlock: {
        marginTop: 20,
        justifyContent: 'flex-end',
        width: '100%',
        height: 405,
        borderRadius: 8
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
        width: '100%'
    },
    gradient: {
        backgroundColor: colors.transparent,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    text: {
        marginBottom: 30,
        marginLeft: 20
    },
    heading: {
        marginBottom: 5
    }
});

export default CourseCard;
