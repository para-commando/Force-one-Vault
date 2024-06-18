const mongoose = require('mongoose');
const { createConnection } = mongoose;
require('dotenv').config();

let forceOneVaultDbConnection = null;
let connectionPromise = null;

const mongoDatabaseClientConnect = () => {

  if (forceOneVaultDbConnection) {
    console.log('Using existing database connection');
    return  { forceOneVaultDbConnection };
  }

  if (!connectionPromise) {

    connectionPromise = new Promise((resolve, reject) => {
      try {
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;
        const clusterUrl = process.env.MONGODB_CLUSTER_URL;
        const forceOneVaultUri = `mongodb+srv://${username}:${password}@${clusterUrl}/Force-one-vault`;

        const connection = createConnection(forceOneVaultUri, {
          retryWrites: true,
          w: 'majority',
        });

        connection.on('connected', () => {
          console.log('Connected 🔗 to forceOneVault Mongo 🌱 Database Successfully🌞🌞!!');
          forceOneVaultDbConnection = connection;
          resolve({ forceOneVaultDbConnection });
        });

        connection.on('error', (error) => {
          console.error('🚀 ~ mongoDatabaseClientConnect ~ error:', error);
          console.log('MongoDB 🌱 Connection 🔗 failed ❌ ❌!!');
          reject(error);
        });
      } catch (error) {
        console.error('🚀 ~ mongoDatabaseClientConnect ~ error:', error);
        console.log('MongoDB 🌱 Connection 🔗 failed ❌ ❌!!');
        reject(error);
      }
    });
  }

  return connectionPromise;
};

module.exports = { mongoDatabaseClientConnect };
