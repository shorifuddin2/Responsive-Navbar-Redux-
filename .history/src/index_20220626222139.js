import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import { StateProvider } from "./Component/context/StateProvider";

ReactDOM.render(
<Router>
<StateProvider initialState={initialState} reducer={export const reducerName = (state = , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}}>
    <App/>
</StateProvider>
</Router>
,

document.getElementById("root"));