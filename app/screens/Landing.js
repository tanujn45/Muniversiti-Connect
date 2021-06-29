import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MyFadeInComponent from '../components/FadeInView';

const Landing = ({ navigation }) => {
    return (
        <View style={styles.containers}>
            <Image
                fadeDuration={1200}
                source={require('../assets/icons/Group.png')}
                onLoad={() => {
                    setTimeout(() => {
                        navigation.navigate('Welcome');
                    }, 1400);
                }}
            />
            <MyFadeInComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 115, 0, 1)'
    }
});

export default Landing;
