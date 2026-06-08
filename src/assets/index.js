// Centralized asset exports using small data-URI placeholders so bundler resolves images even if real assets are missing.
const tinyPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
const dataUri = (b64) => `data:image/png;base64,${b64}`;

export const illustrations = {
  onboarding: { uri: dataUri(tinyPngBase64) },
  leavesTopRight: { uri: dataUri(tinyPngBase64) },
  leavesBottomRight: { uri: dataUri(tinyPngBase64) },
  profileLeaves: { uri: dataUri(tinyPngBase64) },
  settingsLeaves: { uri: dataUri(tinyPngBase64) },
  emptyAlerts: { uri: dataUri(tinyPngBase64) },
  healthyBanner: { uri: dataUri(tinyPngBase64) },
};

export const crops = {
  wheat: { uri: dataUri(tinyPngBase64) },
  rice: { uri: dataUri(tinyPngBase64) },
  corn: { uri: dataUri(tinyPngBase64) },
  sugarcane: { uri: dataUri(tinyPngBase64) },
  default: { uri: dataUri(tinyPngBase64) },
};

export const avatars = {
  farmer: { uri: dataUri(tinyPngBase64) },
};

export const branding = {
  logo: { uri: dataUri(tinyPngBase64) },
  mark: { uri: dataUri(tinyPngBase64) },
};

export default {
  illustrations,
  crops,
  avatars,
  branding,
};
