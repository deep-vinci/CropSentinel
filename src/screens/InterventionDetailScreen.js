import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { materialTheme } from '../theme';

const interventionDetails = {
  action: 'Irrigate immediately',
  irrigation: '35 mm',
  cost: '₹1,200',
  risk: '₹45,000',
  confidence: 0.91,
  improvement: '20-25%',
  roi: '3.8x',
};

export const InterventionDetailScreen = ({ navigation }) => {
  const confidencePercent = Math.round(interventionDetails.confidence * 100);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Intervention</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.metaRow}>
          <View style={styles.recommendationChip}>
            <Text style={styles.recommendationText}>AI Recommendation</Text>
          </View>
        </View>

        <Text style={styles.title}>{interventionDetails.action}</Text>

        <View style={styles.statsRow}>
          {[
            { label: 'Irrigation', value: interventionDetails.irrigation },
            { label: 'Cost', value: interventionDetails.cost },
            { label: 'Yield Risk', value: interventionDetails.risk },
          ].map((item) => (
            <View key={item.label} style={styles.statChip}>
              <Text style={styles.statChipLabel}>{item.label}</Text>
              <Text style={styles.statChipValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>AI Confidence</Text>
          <View style={styles.confidenceBarBackground}>
            <View style={[styles.confidenceBarFill, { width: `${confidencePercent}%` }]} />
          </View>
          <Text style={styles.confidencePercent}>{confidencePercent}%</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionSubTitle}>Why this intervention?</Text>
          <Text style={styles.sectionText}>
            The system detected soil moisture below threshold and crop stress patterns on NDVI maps. Irrigation will improve plant vigor and reduce drought risk.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionSubTitle}>Expected Outcome</Text>
          <View style={styles.outcomeRow}>
            <View>
              <Text style={styles.outcomeLabel}>Yield Improvement</Text>
              <Text style={styles.outcomeValue}>{interventionDetails.improvement}</Text>
            </View>
            <View>
              <Text style={styles.outcomeLabel}>ROI</Text>
              <Text style={styles.outcomeValue}>{interventionDetails.roi}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Apply Intervention</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: materialTheme.colors.background,
  },
  header: {
    marginTop: materialTheme.spacing.sm,
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: materialTheme.colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: materialTheme.colors.onSurface,
    fontSize: 18,
    fontWeight: '700',
  },
  headerSpacer: {
    width: 48,
  },
  content: {
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.xl,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: materialTheme.spacing.md,
  },
  recommendationChip: {
    backgroundColor: materialTheme.colors.error + '22',
    paddingHorizontal: materialTheme.spacing.sm,
    paddingVertical: 8,
    borderRadius: materialTheme.borderRadius.chip,
  },
  recommendationText: {
    color: materialTheme.colors.onSurface,
    fontWeight: '700',
    fontSize: 12,
  },
  title: {
    color: materialTheme.colors.onSurface,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: materialTheme.spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: materialTheme.spacing.lg,
  },
  statChip: {
    flex: 1,
    marginRight: materialTheme.spacing.sm,
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.sm,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  statChipLabel: {
    color: materialTheme.colors.onSurface,
    opacity: 0.75,
    fontSize: 12,
    marginBottom: 8,
  },
  statChipValue: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '700',
  },
  sectionCard: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.card,
    padding: materialTheme.spacing.md,
    marginBottom: materialTheme.spacing.lg,
    shadowColor: materialTheme.colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  sectionLabel: {
    color: materialTheme.colors.onSurface,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: materialTheme.spacing.sm,
  },
  confidenceBarBackground: {
    height: 14,
    backgroundColor: materialTheme.colors.surfaceVariant,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: materialTheme.spacing.sm,
  },
  confidenceBarFill: {
    height: '100%',
    backgroundColor: materialTheme.colors.primary,
  },
  confidencePercent: {
    color: materialTheme.colors.onSurface,
    fontSize: 12,
    fontWeight: '700',
  },
  sectionSubTitle: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: materialTheme.spacing.sm,
  },
  sectionText: {
    color: materialTheme.colors.onSurface,
    opacity: 0.8,
    lineHeight: 20,
    fontSize: 14,
  },
  outcomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outcomeLabel: {
    color: materialTheme.colors.onSurface,
    opacity: 0.75,
    fontSize: 12,
    marginBottom: 6,
  },
  outcomeValue: {
    color: materialTheme.colors.onSurface,
    fontSize: 16,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: materialTheme.colors.primary,
    borderRadius: materialTheme.borderRadius.md,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
