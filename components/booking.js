import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CarpentryScreen({  route, navigation }) {
  const { service } = route.params || {}; 
  return (
    <ScrollView style={styles.container}>
      {/* First Section */}
      <View style={styles.section}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.subtitle}>Our Guarantee</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            {service.description}
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            Great discounts on your booking - New discounts on different services every day.
          </Text>
        </View>
           <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('Calender',{subservices:service.subservices})} // Navigate to CarpentryService
         >
           <Text style={styles.buttonText}>Make a Booking</Text>
         </TouchableOpacity>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>What users are saying about us</Text>
        <Text style={styles.rating}>Rating:{service.rating}</Text>
        <Text style={styles.reviews}>100+ reviews</Text>

        {/* User Reviews */}
        <View style={styles.review}>
          <Text style={styles.userName}>Xin Hau</Text>
          <Text style={styles.reviewText}>
            "Overall great service! He came on time and was very professional."
          </Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.userName}>Sasuke Uchiha</Text>
          <Text style={styles.reviewText}>
            "Overall great service! He came on time and was very professional."
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calender',{subservices:service.subservices})} // Navigate to CarpentryService
        >
          <Text style={styles.buttonText}>Make a Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#2E4D72'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FEA700',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#FEA700',
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 5,
  },
  bulletText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  button: {
    backgroundColor: '#FEA700',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  rating: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  reviews: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  review: {
    marginBottom: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FEA700',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
