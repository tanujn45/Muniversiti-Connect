import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import colors from '../constants/colors';
import AppHeading from '../components/AppHeading';
import AppHeading2 from '../components/AppHeading2';
import Screen from '../components/Screen';
import CourseCard from '../components/CourseCard';

const Home = ({ navigation }) => {
    const [category, setCategory] = useState([
        {
            category: 'Comedy',
            img: 'https://images.theconversation.com/files/350609/original/file-20200731-14-yfu9hp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            key: '1'
        },
        {
            category: 'CSGO',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1612812939',
            key: '2'
        },
        {
            category: 'Football',
            img: 'https://i.pinimg.com/originals/53/62/29/536229884dd211ed415628f406283771.jpg',
            key: '3'
        },
        {
            category: 'Leadership',
            img: 'https://www.suntiros.com/wp-content/uploads/2018/07/Katherine-Langford-Hot-Photos-Gallery-In-2018.jpg',
            key: '4'
        },
        {
            category: 'Swimming',
            img: 'https://i.pinimg.com/originals/53/62/29/536229884dd211ed415628f406283771.jpg',
            key: '5'
        }
    ]);

    return (
        <Screen bgColor={colors.black}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.categoriesContainer}>
                    <View style={styles.homeHeading}>
                        <AppHeading fontColor={colors.white}>Learn from the best</AppHeading>
                        <Feather name="user" size={30} color={colors.white} />
                    </View>
                </View>
                <View style={styles.topCoursesContainer}>
                    <CourseCard onPress={() => navigation.navigate('CourseInfo')} uri='https://cdn.hswstatic.com/gif/chess-4.jpg' />
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    homeHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTextBlock: {
        marginBottom: 7
    },
    categoriesContainer: {
        paddingRight: '5%',
        paddingLeft: '5%',
        marginTop: 20
    },
    categoriesBlock: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
        width: 175,
        height: 245,
        marginRight: 40,
        backgroundColor: '#9ad6d2'
    },
    topCoursesContainer: {
        flex: 1,
        marginTop: 45,
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 8
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 8
    }
});

export default Home;
