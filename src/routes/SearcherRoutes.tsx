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
import { SearcherDetailPageContainer } from '../container/page/SearcherDetailPageContainer'
import { SearcherCreatePageContainer } from '../container/page/SearcherCreatePageContainer'
import { SearcherIntroduceListPageContainer } from '../container/page/SearcherIntroduceListPageContainer'
import { SearcherIntroduceDetailPageContainer } from '../container/page/SearcherIntroduceDetailPageContainer'
import { SearcherConnectionsPageContainer } from '../container/page/SearcherConnectionsPageContainer'
import { SearcherDesignatePageContainer } from '../container/page/SearcherDesignatePageContainer'

export const SearcherRoutes = () => {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route path="/searcher/connections">
          <SearcherConnectionsPageContainer />
        </Route>
        <Route path="/searcher/create">
          <SearcherCreatePageContainer />
        </Route>

        <Route path="/searcher/list">
          <SearcherListPageContainer />
        </Route>

        <Route path="/searcher/project/:id/introduce/:introduceid">
          <SearcherIntroduceDetailPageContainer />
        </Route>

        <Route path="/searcher/project/:id/introduce">
          <SearcherIntroduceListPageContainer />
        </Route>

        <Route path="/searcher/project/:id/designate">
          <SearcherDesignatePageContainer />
        </Route>

        <Route path="/searcher/project/:id">
          <SearcherDetailPageContainer />
        </Route>

        <Route path="/">
          <Redirect to="/searcher/list" />
        </Route>
      </Switch>
    </div>
  )
}

