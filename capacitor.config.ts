import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.casaleo.app',
  appName: 'Casaleo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
