import Constants from 'expo-constants';
import * as Updates from 'expo-updates';

const Config = {
  apiUrl: '',
  enableExperimentalFeatures: true,
  app_channel: 'development',
  app_version: Constants.expoConfig?.version || '1.0.0',
  appID: Constants?.expoConfig?.extra?.APP_ID,
};

if (Updates.channel === 'production') {
  Config.apiUrl = '';
  Config.app_channel = 'production';
  Config.enableExperimentalFeatures = false;
} else if (Updates.channel === 'staging') {
  Config.apiUrl = '';
  Config.enableExperimentalFeatures = true;
  Config.app_channel = 'staging';
}

export default Config;
