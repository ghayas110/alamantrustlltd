import mysql from 'mysql2/promise';

async function createDb() {
  try {
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      port: 8889,
      user: 'root',
      password: 'root'
    });
    await connection.query('CREATE DATABASE IF NOT EXISTS alaman_trust_db;');
    console.log('Database alaman_trust_db created or already exists.');
    await connection.end();
  } catch (error) {
    console.error('Error creating database:', error);
    process.exit(1);
  }
}

createDb();
