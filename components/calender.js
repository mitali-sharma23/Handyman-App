import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const BookingPage = ({route,navigation}) => {
  const {subservices} = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Close the date picker
    setDate(currentDate); // Update the selected date
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false); // Close the time picker
    setDate(currentTime); // Update the selected time
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking</Text>
      </View>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.label}>Pick Date</Text>
        <Text style={styles.value}>{formattedDate}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}

      {/* Time Picker */}
      <TouchableOpacity
        style={styles.timePicker}
        onPress={() => setShowTimePicker(true)}
      >
        <Text style={styles.label}>Pick Time</Text>
        <Text style={styles.value}>{formattedTime}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onTimeChange}
        />
      )}

      {/* Confirmation */}
      <Text style={styles.confirmationText}>
        You selected: {formattedTime} on {formattedDate}
      </Text>
      <TouchableOpacity style={styles.confirmButton} onPress={()=> navigation.navigate('CarpentryService',{subservices})}>
        <Text style={styles.confirmButtonText}>Confirm Timings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  datePicker: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2E4D72',
     boxShadow: '4px 4px 6px',
    shadowColor: '#1C2B3B',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 10, elevation: 15
  },
  timePicker: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2E4D72',
    boxShadow: '4px 4px 6px',
    shadowColor: '#1C2B3B',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 10, elevation: 15
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#FEA700'
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 5,
  },
  confirmationText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  confirmButton: {
    backgroundColor: '#FEA700',
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    boxShadow: '4px 4px 6px rgba(199, 122, 0, 0.8)',
    shadowColor: '#C77A00', // Darker orange shade
    shadowOffset: { width: 4, height: 4 }, // Offset for more visible shadow
    shadowOpacity: 0.8, // Increase opacity for better visibility
    shadowRadius: 6, // Adjust shadow radius for a soft but defined shadow
    elevation: 10, 
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookingPage;
