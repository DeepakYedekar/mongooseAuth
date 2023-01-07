const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    Username: String,
    Email: { type: String, unique: true },
    Password: String,
    Gender: String,
    DateOfBirth: String,
    ContactNumber: Number,
    Role: String
  },
  { timeseries: true }
);

module.exports=new mongoose.model('AuthUser', userSchema);
