import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'


export default class App extends React.Component {

    render () {
        return (
            <Router>
                <div>
                    <Switch>                  
                        <Route path="/login" component={ Login }/>
                        <Route path="/home" component={ Home }/>
                        <Redirect exact from="/" to="/home/pandect"/>
                        <Redirect to="/login"/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
