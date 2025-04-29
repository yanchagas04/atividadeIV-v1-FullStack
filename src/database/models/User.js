const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, informe um nome'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Por favor, informe um email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Por favor, informe um email válido']
  },
  password: {
    type: String,
    required: [true, 'Por favor, informe uma senha'],
    minlength: [6, 'A senha deve ter pelo menos 6 caracteres'],
    select: false
  }
}, {
  timestamps: true
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
