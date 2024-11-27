import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null); // Tracks which input is focused
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Mock login process
    Alert.alert('Success', 'You have successfully logged in!');
    // Integrate your login API logic here
    navigation.navigate('otp'); // Navigating to the OTP screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      {/* Email Input */}
      <TextInput
        style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
        placeholder="Email"
        onFocus={()=>setFocusedInput('email')}
        onBlur={()=>setFocusedInput(null)}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* Password Input with Show/Hide Feature */}
      <View style={[styles.passwordContainer, focusedInput === 'password' && styles.inputFocused]}>
        <TextInput
          style={styles.passwordInput} // Makes input take most of the space
          placeholder="Password"
          onFocus={()=>setFocusedInput('password')}
          onBlur={()=>setFocusedInput(null)}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.showHideButton}
          onPress={() => setShowPassword(!showPassword)}
        >
        <Text style={styles.showHideText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      {/* Navigate to Register Screen */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('register')}
      >
        <Text style={styles.registerButtonText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#FEA700'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,// Ensures the input field doesn't stretch unnecessarily
  },
  inputFocused: {
    borderColor: '#000'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  showHideButton: {
    paddingHorizontal: 10,
  },
  showHideText: {
    color: '#FEA700',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FEA700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FEA700',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
