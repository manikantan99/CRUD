const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());


app.listen(5000, () => {
    console.log(`Server Started Successfully at ${5000}`)
})

mongoose.connect("mongodb://localhost:27017/Project007", { useNewUrlParser: true, useUnifiedTopology:true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

  const routes = require('./routes');
  const router = express.Router()
  
  
    app.use('/api', routes)   
    module.exports = router;
  