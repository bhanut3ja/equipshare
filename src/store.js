// import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./Redux/Reducers/rootReducers";

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(...middleware))
// )

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { addUser, addToken } from "./Redux/AuthSlice";

// const store = configureStore({
//     reducer: {
//         user: addUser,
//         token: addToken
//     }
// })

// export default store;

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./ReduxTwo/Reducers/index";


const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
)

export default store;