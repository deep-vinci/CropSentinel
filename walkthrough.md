# CropSentinel Walkthrough - D1-D4 Finalization

This document provides a walkthrough of the features implemented during Days 1 to 4 of CropSentinel.

## 📱 Navigation & Screens (D1)

The mobile application implements a complete user journey with the following stack:

1. **OnboardingScreen**: Introduction to the platform with "Get Started" call-to-action.
2. **LoginScreen**: Authentication gateway for registered farmers.
3. **MyFarmsScreen**: Dashboard hub showing a summary of average field health, active AI agent status, current weather conditions, and lists of registered farms.
4. **FarmDetailScreen**: Deep-dive into a specific field featuring:
   * Dynamic health score indicator.
   * Four-metric grid (NDVI, Soil Moisture, Weather Risk, Mandi Market Risk).
   * Mini-map card simulating a satellite view with a diamond farm polygon.
   * Trend charts showing NDVI history and Mandi Price trends.
5. **AlertsFeedScreen**: Categorized notifications/alerts stream displaying actionable items.
6. **InterventionDetailScreen**: Detailed breakdown of an alert with recommended actions, cost estimates, risk metrics, and "Take Action" response buttons.
7. **SettingsScreen**: Toggle settings for notifications and navigation access to sub-settings like Help & Support or About.

## 🗺️ Satellite Map Visualization (D2)

* **Satellite View**: Displays high-resolution map representations of the farm zone.
* **Farm Polygon Rendering**: Uses a styled overlay representing the exact geographic boundary of the farm, color-coded based on severity level.

## ⚙️ Service Scaffolding & Integration (D3)

* **Service Layer**: Configured in `src/services/` with an API client (`src/services/api.js`) and a wrapper logic (`src/services/index.js`).
* **Environment Switch**: Uses `USE_MOCK_DATA = true` in `src/config/environment.js` to run in local mock mode, with automatic fallback to mock data when API calls fail.
* **Loading & Error Components**: Built unified `LoadingState` and `ErrorState` components in `src/components/` to handle asynchronous states gracefully across all screens.

## 📊 SVG Charts & Notifications (D4)

* **Pure SVG Charts**: Built clean, responsive sparklines using React Native SVG (`SvgSparkline` in `FarmDetailScreen.js`) to display NDVI trends and Mandi price trends. This has zero dependencies on heavy native modules, ensuring perfect compatibility with Expo Go.
* **Local Notifications**: Implemented Expo Go compatible local notification scheduling in `src/services/notifications.js`.
* **Push Toggle Settings**: Integrated notification settings switch in Settings screen allowing users to toggle notification handling and trigger permission request flows.
* **Expo SDK 56**: Validated configuration parameters in `package.json` and `app.json` for Expo SDK 56.

## 🚀 Demo Mode, Simulation & Polish (D5)

* **Demo Mode settings section**: Added a dedicated "Demo Mode" header and description card under Profile Settings, with a toggle to switch the global `isDemoMode` state.
* **Lightweight Global State Subscription**: Built a zero-dependency subscription store in `src/config/demoState.js` to manage the demo simulation variables (`isDemoMode`, `isDroughtSimulated`) and sync views dynamically.
* **Simulate Drought Flow**: Visible on `FarmDetailScreen` when Demo Mode is active. Tapping it triggers a visual transition from healthy/moderate sugarcane conditions (health: 78, NDVI: 0.65) to critical drought status (health: 41, NDVI: 0.22).
* **Animated Success & Confirmation Feedback**: Tapping "Apply Intervention" scales in a checkmark feedback animation modal saying "Intervention recorded successfully.", schedules a local notification, and updates demo state tracking.
* **npx expo-doctor** passed successfully with `21/21 checks passed. No issues detected!`.

## D5.4 MAP ENHANCEMENT REPORT (Critical Debug Pass)

### Root Cause Analysis:
On Android devices running Expo Go, Google Maps is used as the default maps provider. Google Maps requires a Google Maps API Key to load its map tiles. When no API key is set in `app.json`, the Google Maps SDK fails to load tiles, resulting in a black/blank screen (even though the Google watermark logo, map gestures, and custom markers function correctly).

### Solution:
We bypass the API key requirements by rendering custom web-based tiles using `react-native-maps`'s native `<UrlTile>` overlay:
1. When on Android, we set the MapView `mapType` to `"none"` to disable Google's blank default tiles.
2. We then dynamically render a `<UrlTile>` pointing to:
   - **Standard View**: OpenStreetMap tiles (`https://tile.openstreetmap.org/{z}/{x}/{y}.png`).
   - **Satellite View**: ESRI World Imagery tiles (`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`).
3. On iOS, we continue to use the native system Apple Maps (`mapType="standard"` and `mapType="satellite"`), which renders high-quality map and satellite tiles natively without requiring API keys.

| Check | Status | Note |
|---|---|---|
| Location Picker Rendering | PASS | Renders correctly in Expo Go on both platforms. |
| Blank Screen Fixed | PASS | Checked and resolved on Android. |
| Standard View | PASS | OpenStreetMap tiles render standard view. |
| Satellite View | PASS | ESRI World Imagery tiles render satellite view. |
| Marker Placement | PASS | Tapping map places and updates standard marker pin. |
| Coordinate Capture | PASS | Live latitude/longitude coordinate displays update correctly. |
| Add Field Integration | PASS | Returns coordinates back to AddFieldScreen correctly. |
| Expo Go Compatibility | PASS | Fully compatible without API keys or native configuration. |
| Build Safety | PASS | `npx expo-doctor` passed successfully. |


* **Premium Reanimated Transitions**:
  * Added slide-down Reanimated entrance for the Demo Mode banner.
  * Added staggered fade-in + vertical translation animations (`FadeInCard`) for `MyFarmsScreen` cards and `AlertsFeedScreen` alerts using standard React Native `Animated`.
  * Added auto-animated progress bar for AI confidence scale in `InterventionDetailScreen`.
  * Added smooth visual counting numeric transition for `FarmDetailScreen` health scores.
* **CropSentinel Branding**:
  * Generated and configured premium PNG assets for `icon.png` (Agritech logo) and `splash.png` (constellation/agricultural scan view).
  * Upgraded `app.json` configuration utilizing the Expo-supported `expo-splash-screen` plugin.

