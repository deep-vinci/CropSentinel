import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';
import { useDemoState } from '../config/demoState';

export const AccountSettingsScreen = ({ navigation }) => {
  const { profileName, profileEmail, setProfileName, setProfileEmail } = useDemoState();
  const [name, setName] = useState(profileName);
  const [email, setEmail] = useState(profileEmail);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("ValidationError", "Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      Alert.alert("ValidationError", "Please enter a valid email address.");
      return;
    }

    setProfileName(name.trim());
    setProfileEmail(email.trim());

    Alert.alert(
      "Success",
      "Account settings updated successfully.",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color={materialTheme.colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={styles.headerSpacer} />
      </View>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={materialTheme.colors.textSecondary}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={materialTheme.colors.textSecondary}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: materialTheme.colors.background },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: materialTheme.spacing.lg, paddingVertical: materialTheme.spacing.md },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: materialTheme.colors.surface, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: materialTheme.colors.outline },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: materialTheme.colors.onSurface },
  headerSpacer: { width: 40 },
  content: { paddingHorizontal: materialTheme.spacing.lg, paddingTop: materialTheme.spacing.xl },
  fieldGroup: { marginBottom: materialTheme.spacing.lg },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: materialTheme.colors.textSecondary, marginBottom: materialTheme.spacing.xs },
  textInput: { height: 48, backgroundColor: materialTheme.colors.surface, borderWidth: 1, borderColor: materialTheme.colors.outline, borderRadius: materialTheme.borderRadius.button, paddingHorizontal: 16, fontSize: 15, color: materialTheme.colors.onSurface },
  saveBtn: { backgroundColor: materialTheme.colors.primary, borderRadius: materialTheme.borderRadius.button, paddingVertical: 14, alignItems: 'center', marginTop: materialTheme.spacing.lg },
  saveBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
