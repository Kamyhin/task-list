import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import StorageMiddleware from '../middlewares/StorageMiddlewares.js'


const configureStoreDev = initialState => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware, StorageMiddleware))
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
};

export default configureStoreDev