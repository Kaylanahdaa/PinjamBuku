// connection.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace 'your_database_url' with the actual MongoDB URL
        const dbURL = 'mongodb+srv://admin:admin123@cluster0.3apbmkj.mongodb.net/?retryWrites=true&w=majority';

        await mongoose.connect(dbURL);

        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
module.exports = connectDB;
