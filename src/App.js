import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from "./consts/routes";
import { MainScreen, GameScreen, ConfigScreen, EndScreen } from '../src/screens'
import { history, store } from "./configureStore";

const App = () => (
    <Provider store={ store }>
        <Router history={ history }>
            <Switch>
                <Route path={routes.getEndScreen()} component={EndScreen} />
                <Route path={routes.getGameScreen()} component={GameScreen} />
                <Route path={routes.getConfigureScreen()} component={ConfigScreen} />
                <Route path={routes.getMain()} component={MainScreen} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
