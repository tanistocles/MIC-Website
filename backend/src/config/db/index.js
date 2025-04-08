const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection successfully!!!');
  } catch (error) {
    console.log('Connection Fail!!!!');
  }
}
module.exports = { connect };
