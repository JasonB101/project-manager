require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');

async function createUser() {
    try {
        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // Check if user already exists
        const existingUser = await User.findOne({ email: 'admin' });
        if (existingUser) {
            console.log('User with email "admin" already exists!');
            process.exit(0);
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash('junkjunk', saltRounds);

        // Create new user
        const newUser = new User({
            email: 'admin',
            password: hashedPassword,
            fullName: 'Administrator',
            isAdmin: true
        });

        // Save to database
        await newUser.save();
        console.log('✅ User created successfully!');
        console.log('Email: admin');
        console.log('Password: junkjunk');

    } catch (error) {
        console.error('❌ Error creating user:', error.message);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
}

// Run the script
createUser(); 