module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  server: {
    // Adjust timeout settings as needed
    timeout: {
      server: 30000, // 30 seconds, adjust based on your needs
      socket: 30000, // 30 seconds, adjust based on your needs
      // You can increase these values further if necessary
    },
  },
});
