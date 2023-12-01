const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGODB_URI;

mongoose.connect(URI).then(() => console.log(`Conected to mongoDB`)).catch(() => console.log(`There is an error connecting to the mongoDB server`))

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  vehicle_model: String,
  license_plate: String,
  parking_slot: String,
  date: String,
  time: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;