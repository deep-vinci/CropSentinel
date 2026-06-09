import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';

export const LocationPickerScreen = ({ navigation }) => {
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [mapType, setMapType] = useState('standard');

  const handleMapPress = (e) => {
    setSelectedCoords(e.nativeEvent.coordinate);
  };

  const handleConfirm = () => {
    if (!selectedCoords) {
      return;
    }
    // Navigate back to AddField screen passing coordinates
    navigation.navigate('AddField', { selectedLocation: selectedCoords });
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color={materialTheme.colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Location</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          mapType={mapType}
          initialRegion={{
            latitude: 22.5937,
            longitude: 78.9629,
            latitudeDelta: 12,
            longitudeDelta: 12,
          }}
          onPress={handleMapPress}
        >
          {selectedCoords && (
            <Marker 
              coordinate={selectedCoords} 
              pinColor={materialTheme.colors.primary} 
            />
          )}
        </MapView>

        {/* Floating MapType Segmented Control */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleBtn, mapType === 'standard' && styles.toggleBtnActive]}
            onPress={() => setMapType('standard')}
            activeOpacity={0.8}
          >
            <Text style={[styles.toggleBtnText, mapType === 'standard' && styles.toggleBtnTextActive]}>
              Standard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleBtn, mapType === 'satellite' && styles.toggleBtnActive]}
            onPress={() => setMapType('satellite')}
            activeOpacity={0.8}
          >
            <Text style={[styles.toggleBtnText, mapType === 'satellite' && styles.toggleBtnTextActive]}>
              Satellite
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.helperText}>
          Tap anywhere on the map to select your farm location.
        </Text>

        <View style={styles.coordsContainer}>
          {selectedCoords ? (
            <>
              <Text style={styles.coordsLabel}>Selected Location</Text>
              <Text style={styles.coordsText}>
                Latitude: {selectedCoords.latitude.toFixed(6)} | Longitude: {selectedCoords.longitude.toFixed(6)}
              </Text>
            </>
          ) : (
            <Text style={styles.errorPromptText}>Please choose a location.</Text>
          )}
        </View>

        <TouchableOpacity 
          style={[styles.confirmBtn, !selectedCoords && styles.confirmBtnDisabled]} 
          onPress={handleConfirm}
          disabled={!selectedCoords}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmBtnText}>Use This Location</Text>
        </TouchableOpacity>
      </View>
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
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  toggleContainer: {
    position: 'absolute',
    top: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 4,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 10,
  },
  toggleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  toggleBtnActive: {
    backgroundColor: materialTheme.colors.primary,
  },
  toggleBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
  },
  toggleBtnTextActive: {
    color: '#FFFFFF',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: materialTheme.colors.outline,
    alignItems: 'center',
  },
  helperText: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
  },
  coordsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginBottom: 16,
  },
  coordsLabel: {
    fontSize: 11,
    color: materialTheme.colors.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  coordsText: {
    fontSize: 14,
    fontWeight: '700',
    color: materialTheme.colors.onSurface,
    marginTop: 2,
  },
  errorPromptText: {
    fontSize: 14,
    fontWeight: '600',
    color: materialTheme.colors.error,
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
