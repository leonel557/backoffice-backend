const { Pool } = require('pg');
require('dotenv').config();

exports.client = (() => {
  if (process.env.NODE_ENV === 'development') {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    });
  } else {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }
})();
