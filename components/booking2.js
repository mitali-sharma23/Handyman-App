import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function CarpentryService( {route,navigation} ) {
 const {subservices} = route.params;
 const uniqTitle = subservices[0] ?.title;
  return (
    <View style = {styles.screenContainer}>
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
           <Text style={styles.title}>{uniqTitle}</Text>
        <Text style={styles.subtitle}>
          Delivering service to:{" "}
          <Text style={styles.strong}>HSR Layout 301 Peter's Apartment</Text>
          <Text style={styles.changeLink}> Change</Text>
        </Text>
        <Text style={styles.notice}>
          Service has a minimum charge of ₹600 which includes a free quick use.
        </Text>
      </View>

      {/* Services List */}
      <View style={styles.servicesContainer}>
        {subservices.map((subservice, index) => (
          <View key={index} style={styles.serviceItem}>
            <View>
              <Text style={styles.serviceName}>{subservice.name}</Text>
              <Text style={styles.servicePrice}>₹{subservice.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      </ScrollView>
      {/* Footer Section */}
      <View style={styles.footer}>
        <View style = {styles.totalContainer}>
        <Text style={styles.totalText}>
          <Text style={styles.totalLabel}>Total:</Text> ₹600 + taxes
        </Text>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate('payment')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
       </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Ensures the screen takes the full height
    backgroundColor: '#f9f9f9', // Light background for contrast
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    width: '100%'
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color:'rgb(80, 80, 80)'
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  strong: {
    fontWeight: "bold",
  },
  changeLink: {
    color: "#007bff",
    marginLeft: 10,
  },
  notice: {
    fontSize: 14,
    color: '#FEA700',
    fontWeight: 'bold'
  },
  servicesContainer: {
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    paddingVertical: 10,
    height: 110
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'rgb(80, 80, 80)'
  },
  servicePrice: {
    fontSize: 14,
    color: "#888",
  },
  addButton: {
    backgroundColor: '#FEA700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: 70,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row', // Horizontal alignment for total and button
    justifyContent: 'space-between', // Spread items across the footer
    alignItems: 'center', // Vertically align items
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
    backgroundColor: '#2E4D72', // Dark background color
    borderTopLeftRadius: 16, // Rounded corner for left
    borderTopRightRadius: 16, // Rounded corner for right
    position: 'absolute', // Stick it at the bottom
    bottom: 0, // Anchor to the bottom
    width: '100%', // Full screen width
    height: 100,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  totalLabel: {
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: '#FEA700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarpentryService;
