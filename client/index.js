import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './routes'
import { Provider } from 'react-redux';
import store from './store';
import { syncedHistory } from './syncedHistory';

// USE THIS TO GET NEW IMAGE DATA FROM INSTAGRAM IF NECESSARY
// var appConfig = require('../config/config');
// var Instafeed = require("instafeed.js");
// var request = require('request');

// var feed = new Instafeed({
//     get: 'user',
//     userId: 'self',
//     accessToken : appConfig.instagram.token,
//     mock: true,
//     success: function(response) {
//       // console.log(response);
//       // makeFile(response.data);
//       request.post({url: 'http://localhost:8080/new-photos', body: response.data, json: true}, function(err, httpResponse, body){
//         if (err) {
//           return console.error('upload failed:', err);  
//         } 
//         console.log('Upload successful!  Server responded with:', body);
//       });
//     },
//     error: function(message) {
//       console.log('message')
//     }
// });
// feed.run();

const router = (
  <Provider store={store}>
    <Router routes={routes} history={syncedHistory}/>
  </Provider>
);

render(
  router,
  document.getElementById('app')
)
