import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {signinReducer} from "../redux/modules/SigninReducer/reducer"
import {registerReducer} from "../redux/modules/RegisterReducer/reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    signinReducer,
    registerReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)