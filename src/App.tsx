import * as  React from 'react'
import { CounterContainer } from './container/page/CounterContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

const App = () => {
  const [testApi, setTestApi] = React.useState('Not Connected')

  React.useEffect(
    () => {
      (async () => {
        try {
          const res = await axios.get('http://3.113.26.48/')
          console.log(res.data)
          setTestApi(res?.data?.message)
        } catch (err) {
          console.error(err)
        }
      })()
    },
    []
  )

  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <CounterContainer />
        </Route>

        <Route path="/">
          <h1>{testApi}</h1>
          <h1>Try Me Counter! <Link to="/counter">Me Link!</Link></h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
