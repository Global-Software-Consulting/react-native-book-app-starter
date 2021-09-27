import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducers from 'store/reducers'; // where reducers is a object of reducers
import sagas from 'store/sagas';

const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['loadingReducer', 'snackbarReducer'],
    debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
