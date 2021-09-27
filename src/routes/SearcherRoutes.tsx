import React from 'react'
import Topbar from '../component/atom/Topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { SearcherListPageContainer } from '../container/page/SearcherListPageContainer'

export const SearcherRoutes = () => {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route path="/searcher/list">
          <SearcherListPageContainer />
        </Route>

        <Route path="/">
          <Redirect to="/searcher/list" />
        </Route>
      </Switch>
    </div>
  )
}

