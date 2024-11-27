import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const OtpScreen = ( {navigation} ) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Enter 4-digit OTP messaged to you</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>1:59</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('user')}>
        <Text style={styles.loginText}>Login →</Text>
      </TouchableOpacity>

      <Text style={styles.pinKeyboardText}>PIN Keyboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backText: {
    fontSize: 24,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#FEA700",
    marginBottom: 30,
    fontWeight : 'bold',
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  timerText: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  resendText: {
    fontSize: 16,
    color: "#FEA700",
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: "#FEA700",
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  loginText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
  },
  pinKeyboardText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginTop: 40,
  },
});

export default OtpScreen;
