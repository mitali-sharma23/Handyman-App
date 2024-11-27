
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home.js'; // Your main page
import CategoriesScreen from './components/category.js'; // The "See All" Categories page
import Servicedetails from './service/servicedetail.js'
import CarpentryScreen from './components/booking.js';
import CarpentryService from './components/booking2.js';
import MyBookings from './components/mybooking.js';
import MapScreen from './components/tracebooking.js';
import PaymentOptions from './components/payment.js';
import PaymentTransferring from './components/paymenttransfering.js';
import BookingPage from './components/calender.js';
import SignUpScreen from './components/Register.js';
import LoginScreen from './components/login.js';
import OtpScreen from './components/otp.js';
import ProfilePage from './components/User.js';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main/Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
        {/* Categories Screen */}
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerShown: false }} // Disable default header if you use a custom header
        />
        <Stack.Screen name="servicedetails" component={Servicedetails} />
         {/* Screen for Service Details */}
         <Stack.Screen
          name="ServiceDetails"
          component={Servicedetails}
          options={{ title: 'Service Details' }}
        />
        {/* Screen for Carpentry */}
        <Stack.Screen
          name="Carpentry"
          component={CarpentryScreen}
          options={{ title: 'Carpentry Services' }}
        />
         <Stack.Screen
          name="CarpentryService"
          component={CarpentryService}
          options={{ title: 'Service Details' }}
        />
        <Stack.Screen
          name="mybooking"
          component={MyBookings}
          options={{ title: 'Booking Details' }}
        />
        <Stack.Screen name="Calender" component={BookingPage} />
        <Stack.Screen name="TraceBooking" component={MapScreen} />
        <Stack.Screen name="payment" component={PaymentOptions} />
        <Stack.Screen name="transfer" component={PaymentTransferring} />
        <Stack.Screen name="profile" component={SignUpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={SignUpScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="user" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
