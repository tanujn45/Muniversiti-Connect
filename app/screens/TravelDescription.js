import React from 'react'
import {StyleSheet,
    ScrollView,
  View,
  Image,} from 'react-native'
  import { FontAwesome } from '@expo/vector-icons';

import AppTitle from "../components/AppTitle";
import AppHeading2 from "../components/AppHeading2";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import AppButton from "../components/AppButton";
import VideoCard from "../components/VideoCard";
import Pill from "../components/Pill";

const CAROUSEL_HEIGHT = 400;

const TravelDescription = () => {


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/temp/globe.png")}
        style={[StyleSheet.absoluteFill, styles.img]}
      />
        <ScrollView>
        <View style={styles.placeholder} />
        <View
          style={[
            {
              backgroundColor: colors.black,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingTop: 40,
            },
            styles.content,
          ]}
        >
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <AppTitle>MUN Training</AppTitle>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <FontAwesome name="star" size={24} color="yellow" />
            <AppText style={{marginLeft:10}}>4.6</AppText>
            </View>
            </View>
          <AppHeading2 style={styles.author}>Madhur Oza</AppHeading2>
          <AppText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.
          </AppText>
          <View
            style={{
              flexWrap: "wrap",
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Pill text="Public Speaking" />
            <Pill text="Over 1500  Enrolled" />
          </View>

          
          <AppText
            style={{
              textTransform: "uppercase",
              fontFamily: "PlusJakartaSans-Bold",
              marginTop: 50,
              marginBottom: 15,
            }}
          >
            Future Leaders Under Development 
          </AppText>
          <AppText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Velit duis enim velit mollit.
          </AppText>
          <AppButton
            style={{ marginVertical: 15, }}
            bgColor={colors.primary}
            title="ENROLL NOW!"
          />
        </View>
      </ScrollView>
      </View>
      
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  placeholder: {
    height: CAROUSEL_HEIGHT - 50,
  },
  insideContainer: {
    backgroundColor: colors.black,
  },
  content: {
    padding: 20,
  },
  img: {
    width: "100%",
    height: CAROUSEL_HEIGHT,
  },
  author:{
     marginVertical: 7,
     color:colors.primary
  }
})

export default TravelDescription
