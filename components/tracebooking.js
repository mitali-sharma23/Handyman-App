import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker, Polyline, UrlTile } from 'react-native-maps';

const MapScreen = () => {
  const initialRegion = {
    latitude: 12.971598,
    longitude: 77.594566,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const userLocation = {
    latitude: 12.971598,
    longitude: 77.594566,
  };

  const carLocation = {
    latitude: 12.975598,
    longitude: 77.604566,
  };

  const routeCoordinates = [
    userLocation,
    { latitude: 12.973000, longitude: 77.599000 },
    carLocation,
  ];

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
      >
        {/* OpenStreetMap Tiles */}
        <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />

        {/* User Marker */}
        <Marker coordinate={userLocation} />

        {/* Car Marker */}
        <Marker coordinate={carLocation} />

        {/* Route Polyline */}
        <Polyline coordinates={routeCoordinates} strokeWidth={3} strokeColor="blue" />
      </MapView>

      {/* Bottom Detail Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.timeText}>5 min away</Text>
        <Text style={styles.detailText}>
          Service to be Delivered by{' '}
          <Text style={styles.highlightText}>Avinash Shetty</Text>
        </Text>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Avinash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.75,
  },
  bottomCard: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  timeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  highlightText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  callButton: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;
