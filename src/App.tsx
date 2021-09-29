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
import { IntroducerListPageContainer }from './container/page/IntroducerListPageContainer'
import { IntroducerDetailPageContainer } from './container/page/IntroducerDetailPageContainer'
import { IntroducerSearchPageContainer } from './container/page/IntroducerSearchPageContainer'
import { IntroducerRoutes } from './routes/IntroducerRoutes'
import { SearcherRoutes } from './routes/SearcherRoutes'
import Topbar from './component/atom/Topbar'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { authenticateUser, selectIsAuth, selectUser } from './app/slices/userSlice'
import { ChatPageContainer } from './container/page/ChatPageContainer'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const isAuth = useAppSelector(selectIsAuth)
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const socket = React.useRef<WebSocket>(null)

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
            const res = await axios.get('http://3.113.26.48/')
            const data = res.data.user

            dispatch(authenticateUser({
              user: {
                id: data.id,
                name: data.name,
                email: data.email,
                type: data.purpose ? 'introducer' : 'searcher'
              },
              isAuth: true
            }))
          }
        } catch (err) {
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      })()
    },
    []
  )

  return isLoading ? <div>Loading</div> : (
    <>
      <ToastContainer />
      <Router>
        {isAuth ? 
          user.type === 'introducer' ? (<>
            <ChatPageContainer socket={socket} />
            
            <Switch>
              <Route path="/introducer">
                <IntroducerRoutes />
              </Route>

              <Route path="/">
                <Redirect to="/introducer" />
              </Route>
            </Switch>
          </>
          ) : (<>
            <ChatPageContainer socket={socket}/>

            <Switch>
              <Route path="/searcher">
                <SearcherRoutes />
              </Route>

              <Route path="/">
                <Redirect to="/searcher" />
              </Route>
            </Switch>
          </>)
        :
          <Switch>
            <Route path="/signin">
              <SigninPageContainer />
            </Route>
            <Route path="/signup">
              <SignupPageContainer />
            </Route>
            <Route path="/introducer/project/list">
              <Topbar />
              <IntroducerListPageContainer />
            </Route>
            <Route path="/introducer/project/search/:category">
              <Topbar />
              <IntroducerSearchPageContainer />
            </Route>
            <Route path="/introducer/project/detail/:id">
              <Topbar />
              <IntroducerDetailPageContainer />
            </Route>
            <Route path="/">
              <Redirect to="/introducer/project/list" />
            </Route>
          </Switch>
          }
      </Router>
    </>
  )
}

export default App
