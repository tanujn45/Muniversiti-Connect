import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import colors from '../constants/colors';
import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const CompleteProfile = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');

    return (
        <Screen>
            <View
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios'}
                style={styles.container}
            >
                <View>
                    <AppHeading style={styles.heading}>
                        Compelete your{' '}
                        <AppHeading fontColor={colors.primary}>
                            profile
                        </AppHeading>
                    </AppHeading>
                    <AppText>Full Name</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setFullName}
                        value={fullName}
                        placeholder="Eg. John Doe"
                        keyboardType="default"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Email Address</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Eg. john@doe.com"
                        keyboardType="email-address"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Phone Number</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                        placeholder="Eg. 9876543210"
                        keyboardType="phone-pad"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Country</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCountry}
                        value={country}
                        placeholder="Eg. India"
                        keyboardType="default"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                </View>
                <AppButton
                    bgColor={colors.primary}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: '100%',
        justifyContent: 'space-between',
        padding: 20
    },
    heading: {
        marginBottom: 25
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
        fontSize: 14,
        marginTop: 15,
        marginBottom: 35,
        paddingBottom: 10,
        color: '#fff'
    }
});

export default CompleteProfile;
