import path from 'path';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import AppRouter from './client/router';
import NotFound from './client/not-found';

// initialize the server and configure support for ejs templates
const app = new Express();

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.static(path.join(__dirname, 'build')));

// universal routing
app.get('*', (req, res) => { 
   res.sendFile(path.join(__dirname, 'build/index.html')); 
}); 

// start the server
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
   if (err) {
      return console.error(err);
   }
   console.info(`Server running on http://localhost:${port} [${env}]`);
});