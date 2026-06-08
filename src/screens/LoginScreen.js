import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <View style={styles.decorativeLeaf} />
        <Text style={styles.welcome}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to view your farm insights and alerts.</Text>
      </View>

      <View style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputRow}>
            <Feather name="mail" size={20} color={materialTheme.colors.textSecondary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="farmer@example.com"
              placeholderTextColor={materialTheme.colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputRow}>
            <Feather name="lock" size={20} color={materialTheme.colors.textSecondary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={materialTheme.colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.replace('MyFarms')}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orLabel}>or continue with</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={styles.linkRow}>
          <Text style={styles.linkText}>New farmer? </Text>
          <Text style={[styles.linkText, styles.linkAction]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
    padding: materialTheme.spacing.lg,
    justifyContent: 'space-between',
  },
  headerArea: {
    marginTop: materialTheme.spacing.xl,
  },
  welcome: {
    fontSize: 32,
    fontWeight: '700',
    color: materialTheme.colors.onSurface,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: materialTheme.colors.onSurface,
    opacity: 0.8,
    lineHeight: 24,
  },
  formCard: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.lg,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  inputGroup: {
    marginBottom: materialTheme.spacing.md,
  },
  inputLabel: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: materialTheme.colors.surfaceVariant,
    borderColor: materialTheme.colors.outline,
    borderWidth: 1,
    borderRadius: materialTheme.borderRadius.input,
    paddingHorizontal: 48,
    paddingVertical: 14,
    color: materialTheme.colors.onSurface,
    fontSize: 16,
  },
  inputRow: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  primaryButton: {
    backgroundColor: materialTheme.colors.primary,
    borderRadius: materialTheme.borderRadius.button,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: materialTheme.spacing.sm,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  orLabel: {
    textAlign: 'center',
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    marginVertical: materialTheme.spacing.md,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    backgroundColor: materialTheme.colors.surfaceVariant,
    borderRadius: materialTheme.borderRadius.md,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
  },
  socialText: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    fontWeight: '600',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: materialTheme.spacing.md,
  },
  linkText: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    opacity: 0.75,
  },
  linkAction: {
    color: materialTheme.colors.primary,
    opacity: 1,
  },
});
