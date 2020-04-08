import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from "redux";
import { stateGallows } from  './reducers'
import { Logger } from "./middleware";

export const history = createBrowserHistory();

export const store = createStore(stateGallows, applyMiddleware(Logger));

