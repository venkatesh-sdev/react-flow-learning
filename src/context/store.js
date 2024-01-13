import { combineReducers, configureStore } from "@reduxjs/toolkit";

import flowReducer from "./flowReducer";
import publicReducer from "./publicReducer";

const reducer = combineReducers(
    {
        flow: flowReducer,
        public: publicReducer
    }
)

export default configureStore({
    reducer,
})