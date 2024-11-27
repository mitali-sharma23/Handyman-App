import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
export default Servicedetails = ({ route ,navigation }) => {
  const { category } = route.params; // Get the passed category object
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category.name}</Text>
      <FlatList
        data={category.services} // Render services of the selected category
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.serviceTitle}>{item.name}</Text>
            <View style={styles.imageContainer}>
              {item.image && <Image source={item.image} style={styles.image} />}
            </View>
            <TouchableOpacity
              style={styles.moreInfoButton}
              onPress={() =>navigation.navigate('Carpentry',{ service : item })}
            >
              <Text style={styles.moreInfoText}>More Info</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 18,
    margin: 14,
    padding: 16,
    elevation: 8,
    boxShadow: '6px 6px 4px  rgba(0, 0, 0, 0.3)',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  moreInfoButton: {
    backgroundColor: '#FEA700',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)'
  },
  moreInfoText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
