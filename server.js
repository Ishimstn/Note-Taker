// Dependencies
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// External routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));