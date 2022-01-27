import React, {useState, useEffect} from 'react'

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dbadmin',
  host: '192.168.0.100',
  database: 'dbadmin',
  password: 'erdbeer',
  port: 5432,
});