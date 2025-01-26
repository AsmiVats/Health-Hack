const mongoose = require('mongoose');
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL); 

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = ConnectDB;