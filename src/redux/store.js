import { trackReducer } from "./trackReducers";//importing trackReducer
import { modalReducer } from './modalReducer';//importing ModalReducer
import { combineReducers } from "redux";//to combine both reducers
const redux = require("redux");

const result=combineReducers({// here we have combined both reducer into one
    modal:modalReducer,
    track:trackReducer
})

export const store = redux.createStore(result);//we have use createStore , which is currently depreceated