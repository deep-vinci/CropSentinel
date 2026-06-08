import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.branding}>
        <Text style={styles.title}>CropSentinel</Text>
        <Text style={styles.tagline}>AI-powered farm intelligence</Text>
      </View>

      <View style={styles.actionArea}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a3c2e',
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  branding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 44,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 18,
    color: '#A2D59F',
    textAlign: 'center',
    lineHeight: 26,
  },
  actionArea: {
    paddingBottom: 24,
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
