const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/noderest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("MongoDB connected...")
}).catch((err) => {
  console.log(`Error when try connect to MongoDB: ${err}`)
})

module.exports = mongoose;
