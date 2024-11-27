import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentConfirmation = ({ navigation }) => {
  const handleExploreServices = () => {
    // Example navigation or functionality when clicking "Explore Other Services"
    alert('Navigating to other services...');
  };

  return (
    <View style={styles.container}>
      {/* Confirmation Content */}
      <View style={styles.content}>
        <Ionicons name="checkmark-circle" size={120} color="green" />
        <Text style={styles.confirmationText}>Payment Confirmed</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={handleExploreServices}
        >
          <Text style={styles.exploreButtonText}>Explore Other Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#343a40',
    marginTop: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    backgroundColor: '#f8f9fa',
  },
  exploreButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentConfirmation;
