import { combineReducers, createStore } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import * as firebase from "firebase";

const rootReducer = combineReducers({
    firebase: firebaseReducer
})

const initialState = {}

const rrfconfig = {}

const store = createStore(rootReducer, initialState )
 
const rrfProps = {
    firebase,
    config: rrfconfig,
    dispatch: store.dispatch
}

export function getReduxStore() {
    return store
}

export function getRrfProp() {
    return rrfProps
}

