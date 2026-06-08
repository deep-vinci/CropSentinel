import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { materialTheme } from '../theme';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.heroCard}>
        <View style={styles.illustration}>
          <View style={styles.hill} />
          <View style={styles.sun} />
          <View style={styles.plantRow}>
            <View style={styles.plantStem} />
            <View style={styles.plantLeaf} />
          </View>
        </View>

        <Text style={styles.logo}>CropSentinel</Text>
        <Text style={styles.subtitle}>Intelligent farm insights with clean Material 3 styling.</Text>
      </View>

      <View style={styles.actions}> 
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.outlineButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
    padding: materialTheme.spacing.lg,
    justifyContent: 'space-between',
  },
  heroCard: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.lg,
    padding: materialTheme.spacing.lg,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  illustration: {
    height: 180,
    backgroundColor: materialTheme.colors.primaryContainer,
    borderRadius: materialTheme.borderRadius.lg,
    marginBottom: materialTheme.spacing.lg,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hill: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    height: 110,
    backgroundColor: materialTheme.colors.secondary,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
  },
  sun: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: materialTheme.colors.tertiary,
  },
  plantRow: {
    position: 'absolute',
    bottom: 28,
    left: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plantStem: {
    width: 8,
    height: 60,
    backgroundColor: materialTheme.colors.primary,
    borderRadius: 4,
  },
  plantLeaf: {
    width: 30,
    height: 18,
    backgroundColor: materialTheme.colors.secondary,
    borderRadius: 12,
    marginLeft: -6,
  },
  logo: {
    color: materialTheme.colors.onSurface,
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
  },
  actions: {
    paddingBottom: materialTheme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: materialTheme.colors.primary,
    borderRadius: materialTheme.borderRadius.md,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: materialTheme.spacing.sm,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: materialTheme.colors.primary,
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.md,
    paddingVertical: 16,
    alignItems: 'center',
  },
  outlineButtonText: {
    color: materialTheme.colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});
