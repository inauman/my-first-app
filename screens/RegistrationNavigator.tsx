import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './RegistrationScreen';
import ThankYouScreen from './ThankYouScreen';

const Stack = createNativeStackNavigator();

export default function RegistrationNavigator() {
  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    </Stack.Navigator>
  );
} 