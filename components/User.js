import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

const ProfilePage = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Verified User</Text>
          <Text style={styles.subText}>Xixi Xi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>About App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Rate App</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 0.1</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('mybooking')}>
          <Text style={styles.navText}>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>❓</Text>
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
  profileHeader: {
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menu: {
    marginTop: 16,
  },
  menuItem: {
    padding: 40,
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    color: '#FEA700',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#777',
  },
  footer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    color: '#FEA700',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  versionText: {
    fontSize: 12,
    color: '#777',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProfilePage;
