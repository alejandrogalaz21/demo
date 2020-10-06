import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Board from './components/Board'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Board} />
      </Switch>
    </Router>
  )
}

export default App
