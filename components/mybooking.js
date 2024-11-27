import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MyBookings = () => {
    const navigation = useNavigation();
  const bookings = [
    {
      id: 1,
      service: 'Carpentry',
      icon: '🔧',
      status: 'In Transit',
      address: '301 Peters Cote, HSR Layout',
      date: '1:40 AM, 14 December',
      price: 896,
    },
    {
      id: 2,
      service: 'Plumbing',
      icon: '🚰',
      status: 'Has not left yet',
      address: '201 Green Street, Whitefield',
      date: '3:15 PM, 13 December',
      price: 450,
    },
    {
      id: 3,
      service: 'Electrician',
      icon: '💡',
      status: 'Completed',
      address: '401 Blue Avenue, Koramangala',
      date: '11:30 AM, 12 December',
      price: 700,
    },
    {
      id: 4,
      service: 'Cleaning',
      icon: '🧹',
      status: 'Scheduled',
      address: '801 Sunshine Road, Indiranagar',
      date: '9:00 AM, 15 December',
      price: 550,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Booking List */}
      <ScrollView style={styles.bookingList}>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingItem}>
            <Text style={styles.serviceTitle}>
              {booking.service} {booking.icon}
            </Text>
            <Text style={styles.address}>
              {booking.address}{'\n'}
              {booking.date}
            </Text>
            <Text style={styles.deliveryText}>
              Service to be Delivered by <Text style={styles.highlight}>Avinash Shetty</Text>
            </Text>
            <Text style={styles.status}>
              Status: <Text>{booking.status}</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('TraceBooking')}>
              <Text style={styles.trackBooking}>Track Booking</Text>
            </TouchableOpacity>
            <Text style={styles.price}>₹{booking.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('Home')}>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('profile')}>
          <Text>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>❓</Text>
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
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  activeTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffa500',
    borderRadius: 10,
    marginHorizontal: 8,
    width: '30%',
    height: 50,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)'
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  inactiveTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal: 8,
    width: '30%',
    height: 50,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  inactiveTabText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bookingList: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  bookingItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 16,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  deliveryText: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  highlight: {
    color: '#3498db',
  },
  status: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  trackBooking: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    color: '#27ae60',
    fontWeight: 'bold',
    fontSize: 16,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    marginTop: 16,
  },
  navItem: { alignItems: 'center' },
});

export default MyBookings;
