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
import { SearcherDesignatePageContainer } from '../container/page/SearcherDesignatePageContainer'
import { ChatRows } from '../App'

type iSearcherRoutes = {
  socket: React.RefObject<WebSocket>
  chatRows: ChatRows[]
  setChatRows: (chatRows: ChatRows[]) => void
}

export const SearcherRoutes: React.FC<iSearcherRoutes> = ({ socket, chatRows, setChatRows }) => {
  return (
    <div>
      <Topbar />
      <Switch>
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
          <SearcherDesignatePageContainer socket={socket} chatRows={chatRows} setChatRows={setChatRows} />
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

