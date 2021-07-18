import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Promos from './pages/Promos'
import Home from './pages/Home'

export default function Routes() {

    return (
        <BrowserRouter>        
        <Switch>
            <Route path='/'  exact component={Home} />
            <Route path='/promos ' component={Promos} />
        </Switch>
        </BrowserRouter>
    )

}
