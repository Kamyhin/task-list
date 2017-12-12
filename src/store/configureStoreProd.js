import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import StorageMiddleware from '../middlewares/StorageMiddlewares.js'


const configureStoreProd = (initialState) => {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, StorageMiddleware)
    );
};

export default configureStoreProd