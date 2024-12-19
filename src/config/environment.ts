export const config = {
  apiKey: import.meta.env.VITE_VIMAR_API_KEY,
  apiUrl: 'https://wh.regionalbroadband.ie/vimar',
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production'
};