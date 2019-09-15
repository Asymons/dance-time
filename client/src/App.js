import React from 'react';
import HomePage from './screens/HomePage';
import LeaderBoard from './screens/leaderBoard/LeaderBoard';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import ResultPage from './screens/ResultPage';


const history = createBrowserHistory();

const App = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/leaderboard" component={LeaderBoard}/>
                <Route exact path="/result/:id" component={ResultPage}/>
                <Route render={() => (<div>Miss</div>)}/>
            </Switch>
    </Router>
);

export default App;
