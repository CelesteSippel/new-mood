import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Music from './pages/Music'
import Shows from './pages/Shows'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Music" component={Music}></Route>
        <Route exact path="/Shows" component={Shows}></Route>

        <Route exact path="/Contact" component={Contact}></Route>
        {/* <Route path="*" component={NotFound}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
