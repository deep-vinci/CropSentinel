import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';

export const LocationPickerScreen = ({ navigation }) => {
  const [latText, setLatText] = useState('');
  const [lonText, setLonText] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleConfirm = () => {
    setErrorMsg(null);
    const parsedLat = parseFloat(latText);
    const parsedLon = parseFloat(lonText);

    if (isNaN(parsedLat) || parsedLat < -90 || parsedLat > 90) {
      setErrorMsg('Latitude must be a valid number between -90 and 90.');
      return;
    }

    if (isNaN(parsedLon) || parsedLon < -180 || parsedLon > 180) {
      setErrorMsg('Longitude must be a valid number between -180 and 180.');
      return;
    }

    // Return to AddField screen passing coordinates
    navigation.navigate('AddField', {
      selectedLocation: {
        latitude: parsedLat,
        longitude: parsedLon,
      },
    });
  };

  const isButtonDisabled = !latText.trim() || !lonText.trim();

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={22} color={materialTheme.colors.onSurface} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Farm Coordinates</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.infoCard}>
            <Feather name="info" size={20} color={materialTheme.colors.primary} style={styles.infoIcon} />
            <Text style={styles.helperText}>
              Enter your farm's GPS coordinates manually. You can copy these from Google Maps or another mapping source.
            </Text>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Latitude</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="e.g., 22.5937"
              placeholderTextColor={materialTheme.colors.textSecondary}
              value={latText}
              onChangeText={(t) => {
                setLatText(t);
                if (errorMsg) setErrorMsg(null);
              }}
              keyboardType="numeric"
              autoCorrect={false}
            />
            <Text style={styles.fieldHint}>Must be between -90 and 90 degrees.</Text>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Longitude</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="e.g., 78.9629"
              placeholderTextColor={materialTheme.colors.textSecondary}
              value={lonText}
              onChangeText={(t) => {
                setLonText(t);
                if (errorMsg) setErrorMsg(null);
              }}
              keyboardType="numeric"
              autoCorrect={false}
            />
            <Text style={styles.fieldHint}>Must be between -180 and 180 degrees.</Text>
          </View>

          {errorMsg && (
            <View style={styles.errorContainer}>
              <Feather name="alert-triangle" size={16} color={materialTheme.colors.error} style={{ marginRight: 8 }} />
              <Text style={styles.errorText}>{errorMsg}</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.confirmBtn, isButtonDisabled && styles.confirmBtnDisabled]}
            onPress={handleConfirm}
            disabled={isButtonDisabled}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmBtnText}>Use Coordinates</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: materialTheme.spacing.lg,
    paddingVertical: materialTheme.spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: materialTheme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: materialTheme.colors.onSurface,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    padding: materialTheme.spacing.lg,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: materialTheme.colors.primaryContainer,
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.md,
    marginBottom: materialTheme.spacing.lg,
    alignItems: 'flex-start',
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  helperText: {
    flex: 1,
    fontSize: 14,
    color: materialTheme.colors.primaryDark,
    lineHeight: 20,
  },
  fieldGroup: {
    marginBottom: materialTheme.spacing.lg,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: materialTheme.colors.onSurface,
    marginBottom: materialTheme.spacing.sm,
  },
  fieldInput: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.input,
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
    paddingHorizontal: materialTheme.spacing.md,
    paddingVertical: 14,
    fontSize: 15,
    color: materialTheme.colors.onSurface,
  },
  fieldHint: {
    fontSize: 12,
    color: materialTheme.colors.textSecondary,
    marginTop: 4,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    padding: materialTheme.spacing.md,
    borderRadius: materialTheme.borderRadius.md,
    marginTop: materialTheme.spacing.sm,
  },
  errorText: {
    flex: 1,
    color: materialTheme.colors.error,
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: materialTheme.colors.outline,
  },
  confirmBtn: {
    width: '100%',
    backgroundColor: materialTheme.colors.primaryDark,
    borderRadius: materialTheme.borderRadius.button,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmBtnDisabled: {
    backgroundColor: '#A3A3A3',
    opacity: 0.6,
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
