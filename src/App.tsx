import * as  React from 'react'
import { CounterContainer } from './container/page/CounterContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <CounterContainer />
        </Route>

        <Route path="/">
          <h1>HAIIII</h1>
          <h1>Try Me Counter! <Link to="/counter">Me Link!</Link></h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
