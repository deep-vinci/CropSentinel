import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { materialTheme } from '../theme';
import { illustrations } from '../assets';

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <View style={styles.heroCard}>
        <View style={styles.topIcon}>
          <MaterialCommunityIcons name="sprout" size={48} color={materialTheme.colors.primaryDark} />
        </View>

        <Text style={styles.logo}>CropSentinel</Text>
        <Text style={styles.subtitle}>Intelligent farm insights for healthier fields.</Text>

        <Image source={illustrations.onboarding} style={styles.landscapeIllustration} resizeMode="cover" />
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
    </SafeAreaView>
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
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.lg,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    alignItems: 'center',
  },
  topIcon: {
    position: 'absolute',
    top: -24,
    backgroundColor: materialTheme.colors.surface,
    padding: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
  },
  landscapeIllustration: {
    height: 220,
    width: '100%',
    marginTop: materialTheme.spacing.lg,
    backgroundColor: materialTheme.colors.surfaceVariant,
    borderRadius: materialTheme.borderRadius.card,
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
    color: materialTheme.colors.primaryDark,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 24,
  },
  subtitle: {
    color: materialTheme.colors.textSecondary,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },
  actions: {
    paddingBottom: materialTheme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: materialTheme.colors.primary,
    borderRadius: materialTheme.borderRadius.button,
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
