const express = require('express');
const app = express();

require('./routes/ingredientsRoutes')(app);

app.listen(5000);