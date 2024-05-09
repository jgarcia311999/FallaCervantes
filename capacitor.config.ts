import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.casaleo.app',
  appName: 'casaleo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
