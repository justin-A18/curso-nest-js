export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb_url: process.env.MONGODB_URL,
  port: process.env.PORT || 3000,
});
