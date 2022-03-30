import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {signinReducer} from "./modules/SigninReducer/reducer"
import {registerReducer} from "./modules/RegisterReducer/reducer"
import {listMovieReducer} from "./modules/ListMovieReducer/reducer"
import {movieInfoReducer} from "./modules/MovieInfoReducer/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    signinReducer,
    registerReducer,
    listMovieReducer,
    movieInfoReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)