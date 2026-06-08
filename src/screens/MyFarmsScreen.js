import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { materialTheme } from '../theme';

const MOCK_FARMS = [
  {
    id: 'farm_001',
    name: 'North Field',
    cropType: 'Wheat',
    healthScore: 72,
    ndvi: 0.58,
    moisture: 'Low',
    droughtRisk: 'High',
    riskSeverity: 'high',
  },
  {
    id: 'farm_002',
    name: 'South Field',
    cropType: 'Rice',
    healthScore: 88,
    ndvi: 0.71,
    moisture: 'Moderate',
    droughtRisk: 'Medium',
    riskSeverity: 'medium',
  },
];

const WEATHER = [
  { label: 'Temp', value: '28°C' },
  { label: 'Humidity', value: '68%' },
  { label: 'Rain', value: '12mm' },
  { label: 'Wind', value: '14 km/h' },
];

const navItems = ['Home', 'Farms', 'Insights', 'Alerts', 'Profile'];

export const MyFarmsScreen = ({ navigation }) => {
  const renderFarm = ({ item }) => {
    const severityColor =
      item.riskSeverity === 'high'
        ? materialTheme.colors.error
        : item.riskSeverity === 'medium'
        ? materialTheme.colors.tertiary
        : materialTheme.colors.secondary;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('FarmDetail', { farm: item })}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.farmName}>{item.name}</Text>
          <View style={[styles.healthBadge, { borderColor: materialTheme.colors.outline }]}> 
            <Text style={styles.healthScore}>{item.healthScore}</Text>
            <Text style={styles.healthLabel}>Health</Text>
          </View>
        </View>

        <View style={styles.row}> 
          <Text style={styles.cropType}>{item.cropType}</Text>
          <View style={[styles.riskChip, { backgroundColor: severityColor + '20' }]}> 
            <Text style={[styles.riskChipText, { color: severityColor }]}>{item.droughtRisk} Risk</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBlock}>
            <Text style={styles.statLabel}>NDVI</Text>
            <Text style={styles.statValue}>{item.ndvi}</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.statLabel}>Moisture</Text>
            <Text style={styles.statValue}>{item.moisture}</Text>
          </View>
        </View>

        <View style={styles.trendPlaceholder}>
          <Text style={styles.trendText}>Trend line placeholder</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning, Farmer</Text>
          <Text style={styles.balance}>Your farms are healthy and ready for review.</Text>
        </View>
        <View style={styles.headerAction}>
          <Text style={styles.headerActionText}>Insights</Text>
        </View>
      </View>

      <View style={styles.weatherRow}>
        {WEATHER.map((item) => (
          <View key={item.label} style={styles.weatherCard}>
            <Text style={styles.weatherValue}>{item.value}</Text>
            <Text style={styles.weatherLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={MOCK_FARMS}
        keyExtractor={(item) => item.id}
        renderItem={renderFarm}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        {navItems.map((item) => (
          <TouchableOpacity key={item} style={styles.bottomNavItem}>
            <Text style={styles.bottomNavText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
    paddingTop: materialTheme.spacing.sm,
  },
  header: {
    marginHorizontal: materialTheme.spacing.lg,
    marginBottom: materialTheme.spacing.md,
    padding: materialTheme.spacing.md,
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.lg,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: materialTheme.colors.onSurface,
    fontSize: 24,
    fontWeight: '700',
  },
  balance: {
    color: materialTheme.colors.onSurface,
    opacity: 0.8,
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  headerAction: {
    backgroundColor: materialTheme.colors.primaryContainer,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: materialTheme.borderRadius.md,
  },
  headerActionText: {
    color: materialTheme.colors.primary,
    fontWeight: '700',
  },
  weatherRow: {
    marginHorizontal: materialTheme.spacing.lg,
    marginBottom: materialTheme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherCard: {
    flex: 1,
    backgroundColor: materialTheme.colors.surface,
    padding: materialTheme.spacing.sm,
    marginHorizontal: 4,
    borderRadius: materialTheme.borderRadius.md,
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
  },
  weatherValue: {
    color: materialTheme.colors.onSurface,
    fontWeight: '700',
    fontSize: 16,
  },
  weatherLabel: {
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    marginTop: 4,
    fontSize: 12,
  },
  list: {
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.xl + 60,
  },
  card: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.lg,
    padding: materialTheme.spacing.lg,
    marginBottom: materialTheme.spacing.md,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: materialTheme.spacing.sm,
  },
  farmName: {
    color: materialTheme.colors.onSurface,
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    marginRight: materialTheme.spacing.sm,
  },
  healthBadge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: materialTheme.colors.outline,
    alignItems: 'center',
  },
  healthScore: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '700',
  },
  healthLabel: {
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    fontSize: 12,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: materialTheme.spacing.md,
  },
  cropType: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    opacity: 0.8,
  },
  riskChip: {
    borderRadius: materialTheme.borderRadius.md,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  riskChipText: {
    fontSize: 12,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: materialTheme.spacing.md,
  },
  statBlock: {
    flex: 1,
    marginRight: materialTheme.spacing.sm,
  },
  statLabel: {
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '700',
  },
  trendPlaceholder: {
    padding: materialTheme.spacing.sm,
    backgroundColor: materialTheme.colors.surfaceVariant,
    borderRadius: materialTheme.borderRadius.md,
  },
  trendText: {
    color: materialTheme.colors.onSurface,
    opacity: 0.7,
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    left: materialTheme.spacing.lg,
    right: materialTheme.spacing.lg,
    bottom: materialTheme.spacing.sm,
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: materialTheme.spacing.sm,
    paddingHorizontal: materialTheme.spacing.md,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: materialTheme.colors.onSurface,
    fontSize: 12,
  },
});
