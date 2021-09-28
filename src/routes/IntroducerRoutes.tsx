import React from 'react'
import Topbar from '../component/atom/Topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { IntroducerListPageContainer }from '../container/page/IntroducerListPageContainer'
import { IntroducerSearchPageContainer } from '../container/page/IntroducerSearchPageContainer'
import { IntroducerDetailPageContainer } from '../container/page/IntroducerDetailPageContainer'
import { IntroducerIntroducePageContainer } from '../container/page/IntroducerIntroducePageContainer'
import { IntroducerStatusPageContainer } from '../container/page/IntroducerStatusPageContainer'
import { IntroducerStatusIntroListPageContainer } from '../container/page/IntroducerStatusIntroListPageContainer'
import { IntroducerStatusDetailPageContainer } from '../container/page/IntroducerStatusDetailPageContainer'

export const IntroducerRoutes = () => {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route path="/introducer/status/:projectid/company/:companyid">
          <IntroducerStatusDetailPageContainer />
        </Route>

        <Route path="/introducer/status/:projectid">
          <IntroducerStatusIntroListPageContainer />
        </Route>

        <Route path="/introducer/status">
          <IntroducerStatusPageContainer />
        </Route>

        <Route path="/introducer/status/:id">
          <IntroducerListPageContainer />
        </Route>

        <Route path="/introducer/project/list">
          <IntroducerListPageContainer />
        </Route>

        <Route path="/introducer/project/list">
          <IntroducerListPageContainer />
        </Route>

        <Route path="/introducer/project/search/:category">
          <IntroducerSearchPageContainer />
        </Route>

        <Route path="/introducer/project/detail/:id">
          <IntroducerDetailPageContainer />
        </Route>

        <Route path="/introducer/project/:id/introduce">
          <IntroducerIntroducePageContainer />
        </Route>

        <Route path="/">
          <Redirect to="/introducer/project/list" />
        </Route>
      </Switch>
    </div>
  )
}

