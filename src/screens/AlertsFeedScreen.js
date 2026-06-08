import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';

const MOCK_ALERTS = [
  {
    id: '1',
    farmName: 'North Field',
    title: 'Irrigation needed urgently',
    description: 'Soil moisture is critically low and crops need water within 4 hours.',
    time: '2h ago',
    severity: 'high',
  },
  {
    id: '2',
    farmName: 'South Field',
    title: 'Pest activity detected',
    description: 'Aphid clusters were observed near young rice shoots.',
    time: '5h ago',
    severity: 'medium',
  },
  {
    id: '3',
    farmName: 'East Orchard',
    title: 'Rain forecast incoming',
    description: 'Light showers expected this evening; verify drainage.',
    time: '1d ago',
    severity: 'low',
  },
];

const severityColors = {
  high: materialTheme.colors.error,
  medium: materialTheme.colors.tertiary,
  low: materialTheme.colors.secondary,
};

export const AlertsFeedScreen = ({ navigation }) => {
  const [alerts, setAlerts] = useState(MOCK_ALERTS);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  }, []);

  const unreadCount = alerts.length;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.alertCard, { borderLeftColor: severityColors[item.severity] }]}
      onPress={() => navigation.navigate('InterventionDetail', { alertId: item.id })}
    >
      <View style={styles.alertHeaderRow}>
        <Feather name="bell" size={18} color={severityColors[item.severity]} />
        <Text style={styles.farmName}>{item.farmName}</Text>
      </View>
      <Text style={styles.alertTitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <View style={[styles.severityPill, { backgroundColor: severityColors[item.severity] + '22' }]}> 
          <Text style={[styles.severityText, { color: severityColors[item.severity] }]}>{item.severity.toUpperCase()}</Text>
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screen} edges={["top","bottom"]}>
      <View style={styles.header}>
        <Text style={styles.heading}>Alerts</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{unreadCount} Unread</Text>
        </View>
      </View>

      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={materialTheme.colors.primary} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
  },
  header: {
    paddingTop: materialTheme.spacing.xl,
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    flex: 1,
    color: materialTheme.colors.onSurface,
    fontSize: 28,
    fontWeight: '700',
  },
  badge: {
    backgroundColor: materialTheme.colors.primaryContainer,
    paddingHorizontal: materialTheme.spacing.sm,
    paddingVertical: 8,
    borderRadius: materialTheme.borderRadius.button,
  },
  badgeText: {
    color: materialTheme.colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  list: {
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.xl,
  },
  alertCard: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.lg,
    marginBottom: materialTheme.spacing.md,
    borderLeftWidth: 5,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  farmName: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  alertTitle: {
    color: materialTheme.colors.onSurface,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: materialTheme.colors.onSurface,
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: materialTheme.spacing.md,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  severityPill: {
    borderRadius: materialTheme.borderRadius.chip,
    paddingHorizontal: materialTheme.spacing.sm,
    paddingVertical: 6,
  },
  alertHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  severityText: {
    fontSize: 12,
    fontWeight: '700',
  },
  timeText: {
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    fontSize: 12,
  },
});
