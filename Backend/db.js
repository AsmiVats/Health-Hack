const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://rishavbhardwaz32:hello123@eventrue.g2og6.mongodb.net/?retryWrites=true&w=majority&appName=Eventrue',); // ye eventure ka mongourl hai

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = ConnectDB;