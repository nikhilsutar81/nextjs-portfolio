// scripts/create-admin.js
// Usage: node scripts/create-admin.js
// loads environment variables using dotenv (installed by Next.js already)

require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../src/models/UserModel').default;

async function run() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');

    const email = process.argv[2] || 'admin@example.com';
    const password = process.argv[3] || 'password123';

    const existing = await User.findOne({ email });
    if (existing) {
      console.log(`User with email ${email} already exists`);
      process.exit(0);
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    console.log('Created user:', user.email);
    console.log('Login with:', email, password);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
