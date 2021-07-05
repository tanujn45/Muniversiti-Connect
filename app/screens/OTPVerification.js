import React, { useState } from "react";
import { View, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../constants/colors";
import Timer from "../components/Timer";
import normalize from "../config/responsiveFonts";

const CELL_COUNT = 4;

const OTPVerification = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        enabled={Platform.OS === "ios"}
        style={styles.container}
      >
        <View>
          <AppHeading style={styles.heading}>Verification</AppHeading>
          <AppText>Enter the OTP sent to +91 9876543210</AppText>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <AppText>Resend OTP </AppText>
            <Timer />
          </View>
        </View>

        <AppButton
          title="Send OTP"
          bgColor={colors.primary}
          onPress={() => navigation.navigate("CompleteProfile")}
        />
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 40 : 50,
  },
  heading: {
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#B9B9B9",
    fontSize: 14,
    marginTop: 15,
    marginBottom: 35,
    paddingBottom: 10,
  },
  codeFiledRoot: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    flex: 1,
    height: 60,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.grey2,
    borderBottomWidth: 2,
  },
  cellText: {
    color: colors.white,
    fontSize: normalize(24),
    textAlign: "center",
    fontFamily: "PlusJakartaSans-Bold",
  },
  focusCell: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
});

export default OTPVerification;
