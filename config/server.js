module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1341),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: { enabled: true },
  cors: { enabled: true, origin: ['*'] },
});
