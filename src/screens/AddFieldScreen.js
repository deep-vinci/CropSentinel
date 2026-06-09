import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { materialTheme } from '../theme';

export const AddFieldScreen = ({ navigation, route }) => {
  const farmToEdit = route.params?.farm;
  const isEditMode = !!farmToEdit;

  const [fieldName, setFieldName] = useState('');
  const [cropType, setCropType] = useState('');
  const [fieldArea, setFieldArea] = useState('');
  const [soilType, setSoilType] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (isEditMode) {
      setFieldName(farmToEdit.name || '');
      setCropType(farmToEdit.cropType || farmToEdit.crop_type || '');
      setFieldArea(farmToEdit.area || '5.0');
      setSoilType(farmToEdit.soilType || 'Alluvial');
      setLocation(farmToEdit.location || 'Marathwada (19.87, 75.34)');
    }
  }, [farmToEdit]);

  const handleSelectCrop = () => {
    Alert.alert(
      "Select Crop Type",
      "Choose the crop planted in this field:",
      [
        { text: "Wheat", onPress: () => setCropType("Wheat") },
        { text: "Rice", onPress: () => setCropType("Rice") },
        { text: "Corn", onPress: () => setCropType("Corn") },
        { text: "Sugarcane", onPress: () => setCropType("Sugarcane") },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const handleSelectSoil = () => {
    Alert.alert(
      "Select Soil Type",
      "Choose the soil type of this field:",
      [
        { text: "Alluvial", onPress: () => setSoilType("Alluvial") },
        { text: "Clayey", onPress: () => setSoilType("Clayey") },
        { text: "Sandy", onPress: () => setSoilType("Sandy") },
        { text: "Loamy", onPress: () => setSoilType("Loamy") },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const handleSelectLocation = () => {
    Alert.alert(
      "Select Location",
      "Simulate selecting location on satellite map:",
      [
        { text: "Use Punjab GPS Location", onPress: () => setLocation("Punjab (30.90, 75.85)") },
        { text: "Use Kaveri Delta GPS", onPress: () => setLocation("Tamil Nadu (10.91, 79.36)") },
        { text: "Use Marathwada GPS", onPress: () => setLocation("Maharashtra (19.87, 75.34)") },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const handleSave = () => {
    if (!fieldName.trim()) {
      Alert.alert("ValidationError", "Please enter a field name.");
      return;
    }
    if (!cropType) {
      Alert.alert("ValidationError", "Please select a crop type.");
      return;
    }
    if (!fieldArea.trim() || isNaN(Number(fieldArea))) {
      Alert.alert("ValidationError", "Please enter a valid numeric area in acres.");
      return;
    }
    if (!soilType) {
      Alert.alert("ValidationError", "Please select a soil type.");
      return;
    }
    if (!location) {
      Alert.alert("ValidationError", "Please select a location.");
      return;
    }

    // Success State
    const successMsg = isEditMode ? "Farm updated successfully." : "Farm added successfully.";
    Alert.alert(
      "Success",
      successMsg,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          }
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
        <Text style={styles.headerTitle}>{isEditMode ? "Edit Farm" : "Add New Field"}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Field Name</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="e.g., North Field"
            placeholderTextColor={materialTheme.colors.textSecondary}
            value={fieldName}
            onChangeText={setFieldName}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Select Crop Type</Text>
          <TouchableOpacity style={styles.fieldSelect} onPress={handleSelectCrop}>
            <Text style={[styles.fieldSelectText, cropType && { color: materialTheme.colors.onSurface }]}>
              {cropType || "Choose crop"}
            </Text>
            <Feather name="chevron-down" size={18} color={materialTheme.colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Field Area (Acres)</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="e.g., 5.2"
            placeholderTextColor={materialTheme.colors.textSecondary}
            value={fieldArea}
            onChangeText={setFieldArea}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Soil Type</Text>
          <TouchableOpacity style={styles.fieldSelect} onPress={handleSelectSoil}>
            <Text style={[styles.fieldSelectText, soilType && { color: materialTheme.colors.onSurface }]}>
              {soilType || "Choose soil type"}
            </Text>
            <Feather name="chevron-down" size={18} color={materialTheme.colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Location</Text>
          <TouchableOpacity style={styles.fieldSelect} onPress={handleSelectLocation}>
            <View style={styles.fieldSelectLeft}>
              <Feather name="map-pin" size={16} color={materialTheme.colors.textSecondary} />
              <Text style={[styles.fieldSelectText, location && { color: materialTheme.colors.onSurface }]}>
                {location || "Select on map"}
              </Text>
            </View>
            <Feather name="chevron-right" size={18} color={materialTheme.colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>{isEditMode ? "Update Farm" : "Save Field"}</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingHorizontal: materialTheme.spacing.lg,
    paddingBottom: materialTheme.spacing.xxl,
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
  fieldSelect: {
    backgroundColor: materialTheme.colors.surface,
    borderRadius: materialTheme.borderRadius.input,
    borderWidth: 1,
    borderColor: materialTheme.colors.outline,
    paddingHorizontal: materialTheme.spacing.md,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldSelectLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: materialTheme.spacing.sm,
  },
  fieldSelectText: {
    fontSize: 15,
    color: materialTheme.colors.textSecondary,
  },
  saveBtn: {
    backgroundColor: materialTheme.colors.primaryDark,
    borderRadius: materialTheme.borderRadius.button,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: materialTheme.spacing.md,
  },
  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
