import React from 'react'
import Topbar from '../component/atom/Topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import IntroducerListPageContainer from '../container/page/IntroducerListPageContainer'
import { IntroducerSearchPageContainer } from '../container/page/IntroducerSearchPageContainer'
import { IntroducerDetailPageContainer } from '../container/page/IntroducerDetailPageContainer'
import { IntroducerIntroducePageContainer } from '../container/page/IntroducerIntroducePageContainer'

export const IntroducerRoutes = () => {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route path="/introducer/project/list">
          <IntroducerListPageContainer />
        </Route>

        <Route path="/introducer/project/search/:category">
          <IntroducerSearchPageContainer />
        </Route>

        <Route path="/introducer/project/detail/:id">
          <IntroducerDetailPageContainer />
        </Route>

        <Route path="/introducer/project/introduce/:id">
          <IntroducerIntroducePageContainer />
        </Route>

        <Route path="/">
          <Redirect to="/introducer/project/list" />
        </Route>
      </Switch>
    </div>
  )
}

