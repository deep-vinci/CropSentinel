import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { darkGreenTheme } from './src/theme';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MyFarmsScreen } from './src/screens/MyFarmsScreen';
import { FarmDetailScreen } from './src/screens/FarmDetailScreen';
import { AlertsFeedScreen } from './src/screens/AlertsFeedScreen';
import { InterventionDetailScreen } from './src/screens/InterventionDetailScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={darkGreenTheme.colors.background} />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: darkGreenTheme.colors.primary,
            background: darkGreenTheme.colors.background,
            card: darkGreenTheme.colors.surface,
            text: darkGreenTheme.colors.text,
            border: darkGreenTheme.colors.border,
            notification: darkGreenTheme.colors.error,
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: darkGreenTheme.colors.background },
            animationEnabled: true,
          }}
          initialRouteName="Onboarding"
        >
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="MyFarms"
            component={MyFarmsScreen}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="FarmDetail"
            component={FarmDetailScreen}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="AlertsFeed"
            component={AlertsFeedScreen}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="InterventionDetail"
            component={InterventionDetailScreen}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              animationEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
