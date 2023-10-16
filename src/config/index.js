require("dotenv").config();

const config = {
  PORT: parseInt(process.env.PORT) || 3050,
  API: process.env.API || "api/ver1",
  API_DOCS: process.env.API_DOCS || "api-docs"
};

module.exports = config;
