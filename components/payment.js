import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentOptions = ( {navigation} ) => {
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected option

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update the selected option
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Preferred Payment Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERRED PAYMENT</Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('cash')}
          >
            <View style={styles.optionLeft}>
              <Ionicons name="cash" size={24} color="green" />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Cash</Text>
                <Text style={styles.optionSubtitle}>
                  Please keep exact change handy to help us serve you better
                </Text>
              </View>
            </View>
            {selectedOption === 'cash' && (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            )}
          </TouchableOpacity>
        </View>

        {/* UPI Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UPI</Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('upi')}
          >
            <View style={styles.optionLeft}>
              <Ionicons name="add-circle" size={24} color="orange" />
              <View style={styles.optionDetails}>
                <Text style={[styles.optionTitle, { color: 'orange' }]}>
                  Add New UPI ID
                </Text>
                <Text style={styles.optionSubtitle}>
                  You need to have a registered UPI ID
                </Text>
              </View>
            </View>
            {selectedOption === 'upi' && (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            )}
          </TouchableOpacity>
        </View>

        {/* Credit/Debit Cards Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CREDIT/DEBIT CARDS</Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('card')}
          >
            <View style={styles.optionLeft}>
              <Ionicons name="card" size={24} color="red" />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>XXXX XXXX XXXX 8000</Text>
              </View>
            </View>
            {selectedOption === 'card' && (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            { backgroundColor: selectedOption ? '#FEA700' : '#d6d6d6' }, // Button is grayed out if no option is selected
          ]}
          pointerEvents={selectedOption ? 'auto' : 'none'} // Disable touch events if no option is selected
          onPress={()=>navigation.navigate('transfer')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
    marginTop: 50
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
    marginBottom: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionDetails: {
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 4,
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  continueButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PaymentOptions;
