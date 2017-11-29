import React from 'react'
import { browserHistory, IndexRoute, Route, Router, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import RoomPage from './routes/RoomPage'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/room" component={RoomPage}/>
      </Switch>
    </Router>
  )
}

export default RouterConfig
