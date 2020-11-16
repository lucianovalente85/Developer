const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresa = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  we: {
    type: String
  },
  technology: {
    type: String
  },
  icone1: {
    type: String
  },
  icone2: {
    type: String
  },
  icone3: {
    type: String
  },
}, {
  timestamps: true,
});

mongoose.model('Empresa', empresa);