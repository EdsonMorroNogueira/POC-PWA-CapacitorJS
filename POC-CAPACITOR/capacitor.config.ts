import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'school.sptech',
  appName: 'poc-capacitor',
  webDir: 'dist',
  bundledWebRuntime: true,
  server: {
    androidScheme: 'https'
  }
};

export default config;
