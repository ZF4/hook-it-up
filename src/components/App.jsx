import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Details from './Details';
import Users from './Users'
import './styles.css';
import logo from './HookItUp_Final.png'


const App = () => {


    return (
        <Router>
            <Fragment>
                    <img className="img" src={logo} alt="Hook it up image" />
                <div className="test">
                    <Link to="Users"><button className="btn btn-dark">Click for users!</button></Link>
                    <Link to="/"><button className="btn btn-dark">Home</button></Link>
                </div>
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route exact path="/" component="" />
                    <Route path="/details/:id/" component={Details} />
                </Switch>
            </Fragment>
        </Router>

    );
}

export default App;




