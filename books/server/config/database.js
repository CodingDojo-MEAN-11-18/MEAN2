const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.resolve('server/models');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect(
  'mongodb://localhost:27017/books',
  { useNewUrlParser: true }
);

mongoose.connection.on('connected', () => console.log('MongoDB connected'));

fs.readdirSync(modelsPath)
  // .filter(file => reg.test(file))
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
