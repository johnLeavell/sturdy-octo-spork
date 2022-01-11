const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');
const db = process.env.DATABASE;
const localdb = process.env.DATABASE_LOCAL;

mongoose
  .connect(localdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
