const mongoose = require('mongoose');
require('dotenv').config();
mongoDatabaseClient = async (database) => {
  try {
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const clusterUrl = process.env.MONGODB_CLUSTER_URL;
    const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${database}`;
    await mongoose.connect(uri, { retryWrites: true, w: 'majority' });
    console.log('MongoDB 🌱 Connection 🔗 Successful 🌞🌞!!');

    return mongoose.connection;
  } catch (error) {
    console.log('🚀 ~ mongoDatabaseClient= ~ error:', error);

    throw error;
  }
};

mongoDatabaseClient('Force-one-vault');
