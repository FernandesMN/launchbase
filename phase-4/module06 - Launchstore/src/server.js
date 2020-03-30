const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require('method-override');

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
});

server.listen(5000);

// package.json
// "start": "npm-run-all -p nodemon browsersync",
// "nodemon": "nodemon src/server.js",
// "browsersync": "browser-sync start --proxy http://localhost:5000 --files 'public,src/app/views'"