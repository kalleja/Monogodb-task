//'use strict'; module is strict by default
const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('DB connected');
  } catch (err) {
    console.error('Connection to db failed', err);
  }
})();

module.exports = mongoose.connection;
