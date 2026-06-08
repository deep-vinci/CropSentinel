import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';

export const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [languageEnglish, setLanguageEnglish] = useState(true);
  const [demoMode, setDemoMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      {demoMode && (
        <View style={styles.demoBanner}>
          <Text style={styles.demoBannerText}>DEMO MODE ACTIVE</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Push Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? '#FFFFFF' : '#FFFFFF'}
            trackColor={{ false: '#4b6f52', true: '#2e7d32' }}
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Language</Text>
          <Switch
            value={languageEnglish}
            onValueChange={setLanguageEnglish}
            thumbColor={languageEnglish ? '#FFFFFF' : '#FFFFFF'}
            trackColor={{ false: '#4b6f52', true: '#2e7d32' }}
          />
        </View>
        <View style={styles.rowDetail}>
          <Text style={styles.rowDetailText}>{languageEnglish ? 'English' : 'Hindi'}</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Demo Mode</Text>
          <Switch
            value={demoMode}
            onValueChange={setDemoMode}
            thumbColor={demoMode ? '#FFFFFF' : '#FFFFFF'}
            trackColor={{ false: '#4b6f52', true: '#d32f2f' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a3c2e',
  },
  header: {
    paddingTop: 54,
    paddingBottom: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#183526',
  },
  backText: {
    color: '#A8E6A1',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  headerSpacer: {
    width: 48,
  },
  demoBanner: {
    backgroundColor: '#b71c1c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  demoBannerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  rowLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 12,
  },
  rowDetail: {
    paddingBottom: 18,
  },
  rowDetailText: {
    color: '#B9E6B9',
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#234b37',
  },
});
