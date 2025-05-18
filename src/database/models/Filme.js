const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Por favor, informe um id'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Por favor, informe um título'],
    trim: true
  }, 
  description: {
    type: String,
    required: [true, 'Por favor, informe uma descrição'],
    trim: true
  },
  watched: {
    type: Boolean,
    required: [true, 'Por favor, informe se foi assistido'],
    trim: true
  },
  userId: {
    type: String,
    required: [true, 'Por favor, informe um id de usuário'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Filme', FilmeSchema);
