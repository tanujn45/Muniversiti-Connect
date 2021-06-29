import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText2 from '../components/AppText2';
import Screen from '../components/Screen';
import colors from '../constants/colors';

const Profile = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <FontAwesome
                        name="cog"
                        size={30}
                        color="#FF7300"
                        style={{ margin: 30 }}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <View
                        style={{
                            position: 'absolute',
                            top: -75,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Image
                            source={require('../assets/temp/Ellipse.png')}
                            style={styles.profileImage}
                        />
                        <AppHeading style={{ marginTop: 20 }}>
                            Name Surname
                        </AppHeading>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ width: '100%' }}
                    >
                        <View style={styles.tab}>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <FontAwesome
                                    name="book"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 15 }}
                                />
                                <AppText2 style={styles.apptext}>
                                    My Courses
                                </AppText2>
                            </View>
                            <FontAwesome
                                name="chevron-right"
                                size={25}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ width: '100%' }}
                    >
                        <View style={styles.tab}>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <FontAwesome
                                    name="file-text-o"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 15 }}
                                />
                                <AppText2>My List</AppText2>
                            </View>
                            <FontAwesome
                                name="chevron-right"
                                size={25}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    topContainer: {
        flex: 0.5,
        flexDirection: 'row-reverse',
        // shadowColor: 'rgba(255, 255, 255, 0.8)',
        // shadowOffset: { height: 10, width: 0 },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        // elevation: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cog: {
        height: 50,
        width: 50
    },
    profileImage: {
        width: 125,
        height: 125,
        borderRadius: 150 / 2,
        overflow: 'hidden'
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    apptext: {
        alignSelf: 'flex-start'
    },
    appheading: {
        marginTop: 20
    }
});
export default Profile;
