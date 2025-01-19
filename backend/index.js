const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


const routes = require('./routes/get.js');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
