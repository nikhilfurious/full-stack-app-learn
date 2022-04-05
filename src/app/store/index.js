import { createStore } from "redux";
import { defaultState } from "./src/app/store/index.js";


export const store = createStore(function reducer(state = defaultState, action) {
    return state;
})