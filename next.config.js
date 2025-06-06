const { redirect } = require("next/dist/server/api-utils");

module.exports = {
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "localhost",
    "127.0.0.1",
  ],

  async redirects() {
    return [
      
    ];
  },
};
