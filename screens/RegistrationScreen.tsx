import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RegistrationStackParamList } from './types';

// If you want to use props directly:
type RegistrationScreenProps = NativeStackScreenProps<RegistrationStackParamList, 'Registration'>;

const RegistrationScreen: React.FC<Partial<RegistrationScreenProps>> = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RegistrationStackParamList, 'Registration'>>();

  const validateEmail = (email: string) => {
    // Simple email regex for demonstration
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleRegister = async () => {
    if (loading) return;
    if (!name || !email || !company) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setCompany('');
      setTimeout(() => {
        setSuccess(false);
        navigation.navigate('ThankYou', { name, email });
      }, 1000);
    }, 1500);
  };

  const handleInputChange = (setter: (val: string) => void) => (val: string) => {
    setter(val);
    if (error) setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={handleInputChange(setName)}
          placeholderTextColor="#888"
          editable={!loading && !success}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleInputChange(setEmail)}
          placeholderTextColor="#888"
          editable={!loading && !success}
        />
        <TextInput
          style={styles.input}
          placeholder="Company"
          value={company}
          onChangeText={handleInputChange(setCompany)}
          placeholderTextColor="#888"
          editable={!loading && !success}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {loading && (
          <ProgressBar indeterminate style={styles.progressBar} />
        )}
        {success && <Text style={styles.success}>✓ Registration successful!</Text>}
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.button}
          contentStyle={{ paddingVertical: 8 }}
          loading={loading}
          disabled={loading || success}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#22223b',
    letterSpacing: 1,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#c9ada7',
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 18,
    paddingHorizontal: 12,
    fontSize: 17,
    backgroundColor: '#f8f8ff',
  },
  error: {
    color: '#b00020',
    marginBottom: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
  progressBar: {
    marginBottom: 12,
    borderRadius: 8,
    height: 6,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  success: {
    color: '#388e3c',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
