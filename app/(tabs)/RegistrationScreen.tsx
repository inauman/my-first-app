import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    // Simple email regex for demonstration
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleRegister = async () => {
    if (loading) return; // Prevent duplicate submissions
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
      setName('');
      setEmail('');
      setCompany('');
      alert('Registration successful!');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Company"
          value={company}
          onChangeText={setCompany}
          placeholderTextColor="#888"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {loading && (
          <ProgressBar indeterminate style={styles.progressBar} />
        )}
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.button}
          contentStyle={{ paddingVertical: 8 }}
          loading={loading}
          disabled={loading}
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
});

export default RegistrationScreen;
