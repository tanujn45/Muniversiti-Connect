import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../constants/colors';

const PhoneNumber = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Screen>
            <KeyboardAvoidingView
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
                </View>
                <AppButton
                    title="Send OTP"
                    bgColor={colors.primary}
                    onPress={() => navigation.navigate('OTPVerification')}
                />
            </KeyboardAvoidingView>
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

export default PhoneNumber;
