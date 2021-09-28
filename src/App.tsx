import * as  React from 'react'
import { CounterContainer } from './container/page/CounterContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import axios from 'axios'
import { SigninPageContainer } from './container/page/SigninPageContainer'
import 'antd/dist/antd.css'
import { SignupPageContainer } from './container/page/SignupPageContainer'
import { IntroducerRoutes } from './routes/IntroducerRoutes'
import { SearcherRoutes } from './routes/SearcherRoutes'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false)

  React.useEffect(
    () => {
      (async () => {
        try {
          // Get Token Cookie
          const token = Cookies.get('token')

          if (token) {
            // Set to axios header
            axios.defaults.headers.common['Authorization'] = `Token ${token}`

            // If token invalid will throw error
            await axios.get('http://3.113.26.48/')

            setIsAuth(true)
          }
        } catch (err) {
          console.error(err)
        }
      })()
    },
    []
  )

  return (
    <>
      <ToastContainer />
      <Router>
        {isAuth ? <Switch>
            <Route path="/counter">
              <CounterContainer />
            </Route>

            <Route path="/searcher">
              <SearcherRoutes />
            </Route>

            <Route path="/introducer">
              <IntroducerRoutes />
            </Route>

            <Route path="/">
              <Redirect to="/introducer" />
            </Route>
          </Switch> :
          <Switch>
            <Route path="/signin">
              <SigninPageContainer />
            </Route>
            <Route path="/signup">
              <SignupPageContainer />
            </Route>
            <Route path="/">
              <Redirect to="/signin" />
            </Route>
          </Switch>
          }
      </Router>
    </>
  )
}

export default App
