import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './client/routes';
import store from './client/store';
import { Provider } from 'react-redux';

// Take browser history and use this with the state
var bodyParser = require('body-parser');
var fileSystem = require('fs');
var app = express()

app.use(compression())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// serve our static stuff
app.use(express.static('public'));


// Code for putting images from instagram into photos
// 
// var makeFile = function(data, next) {
//   var data = `module.exports = ${JSON.stringify(data)};`
//   fileSystem.writeFile('./data/photos.js', data, function (err) {
//     if (err) {
//       return console.warn(err);
//     }
//     console.log('complete');
//     next();
//   });
// }

// app.post('/new-photos', function(req, res){
//   // console.log(req.body);
//   makeFile(req.body, function(){res.status(200).send()});
// });

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )
      res.send(renderFullPage(html, store))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderFullPage(html, initialState) {
  return `
    <!doctype html public="storage">
    <html>
      <head>
        <meta charset=utf-8/>
        <title>Reduxstagram</title>
        <link rel="shortcut icon" type="image/png" href="http://wes.io/ehRe/my-favourite-icon.png"/>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})


// <script>
//   window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
// </script>