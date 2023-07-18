// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');
const hbs = require('hbs');
const path = require('path');


// Handles the handlebars
// https://www.npmjs.com/package/hbs


//hbs.registerPartials(path.join(__dirname, 'views/partials/'));

const app = express();
app.set('view engine', 'hbs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);



// default value for title local
const projectName = 'lab-movies-celebrities';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const movieRoute = require('./routes/movies.routes');
app.use('/', movieRoute);

const celebRoute = require('./routes/celebrities.routes');
app.use('/', celebRoute);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
