import React from 'react';
import { Switch, Route, Router } from 'react-router';
import routes from "./consts/routes";
import { MainScreen, GameScreen } from '../src/screens'
import { history } from "./configureStore";

const App = () => (
    <Router history={history}>
        <Switch>
            <Route path={routes.getGameScreen()} component={GameScreen} />
            <Route path={routes.getMain()} component={MainScreen} />
        </Switch>
    </Router>
);

export default App;
