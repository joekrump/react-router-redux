import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import PhotoGrid from './components/PhotoGrid'
import PhotoDetails from './components/PhotoDetails'
import Home from './components/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/photos" component={PhotoGrid} />
    <Route path="/photos/:photoCode" component={PhotoDetails}/>
    <Route path="/about" component={About}/>
  </Route>
)
