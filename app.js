var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')

require('./api/models/db');
require('./api/config/passport');


app.use(passport.initialize());
app.use('/api', routesApi);