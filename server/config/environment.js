import { config as loadConfig } from 'dotenv';

// Only load .env file if not using Doppler
if (!process.env.DOPPLER_PROJECT) {
  loadConfig();
}

export const config = {
  port: process.env.PORT || 3000,
  vimarApiKey: process.env.VIMAR_API_KEY,
  vimarApiUrl: process.env.VIMAR_API_URL || 'https://wh.regionalbroadband.ie/vimar',
  hubspotApiKey: process.env.HUBSPOT_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  isDoppler: !!process.env.DOPPLER_PROJECT
};