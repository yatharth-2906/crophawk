require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongodb_url = String(process.env.DB_ONLINE);

async function connectToMongoDB() {
    try {
        await mongoose.connect(mongodb_url);
        console.log('Successfully connected to the Database.');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectToMongoDB;