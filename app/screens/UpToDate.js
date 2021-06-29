import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

import AppButton from '../components/AppButton';
import AppHeading2 from '../components/AppHeading2';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../constants/colors';

const UpToDate = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <AppHeading2
                        style={{ textAlign: 'center', marginBottom: 20 }}
                    >
                        Want to stay up to date?
                    </AppHeading2>
                    <AppText
                        style={{
                            textAlign: 'center',
                            marginBottom: 20,
                            color: colors.grey2,
                            width: '90%'
                        }}
                    >
                        Allow Upskill to send you notifications about class
                        announcements, new releases, and more.
                    </AppText>
                    <AppButton title="okay" bgColor={colors.primary} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL('https://google.com')}
                >
                    <AppText>MAYBE LATER</AppText>
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    container2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.grey,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20
    }
});

export default UpToDate;
