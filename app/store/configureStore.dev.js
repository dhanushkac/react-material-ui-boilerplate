import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import  { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware, thunk, createLogger()),
            DevTools.instrument()
        )
    );
}
