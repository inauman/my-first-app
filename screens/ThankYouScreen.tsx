import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RegistrationStackParamList } from './types';

type ThankYouScreenProps = NativeStackScreenProps<RegistrationStackParamList, 'ThankYou'>;

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ navigation, route }) => {
  const name = route?.params?.name || '';
  const email = route?.params?.email || '';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you{name ? `, ${name}` : ''}!</Text>
      {email ? <Text style={styles.subtext}>We've registered your email: {email}</Text> : null}
      <Button title="Back to Registration" onPress={() => navigation.navigate('Registration')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 24, marginBottom: 20,
  },
  subtext: {
    fontSize: 16, marginBottom: 20, color: '#555',
  },
});

export default ThankYouScreen;
