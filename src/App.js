import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Board from './components/Board'
import Quiz from './components/Quiz'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Board} />
        <Route exact path='/quiz/:id?' component={Quiz} />
      </Switch>
    </Router>
  )
}

export default App
