import React, { useEffect } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const PaymentTransferring = () => {
  useEffect(() => {
    // Simulate a delay to mimic payment processing
    const timer = setTimeout(() => {
      // No navigation, just simulate the delay and leave on the same screen
    }, 4000); // 4-second delay

    return () => clearTimeout(timer); // Cleanup timer when unmounting
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Processing your payment...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default PaymentTransferring;
