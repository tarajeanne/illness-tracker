module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  USDA_API_KEY: process.env.USDA_API_KEY,
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  db_port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET || 'auth-token',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '1h'
};
