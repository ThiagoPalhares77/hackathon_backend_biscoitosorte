const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://gxozudbyxrnulj:3782d580d6ae301713932281dce559fd7b4e4d74d8d01a40edd89a590b0e2caf@ec2-52-71-69-66.compute-1.amazonaws.com:5432/d64lukn2kkteg7',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client