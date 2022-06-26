import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import { StateProvider } from "./Component/context/StateProvider";

ReactDOM.render(
<Router>
<StateProvider initialState={initialState} reducer={red}>
    <App/>
</StateProvider>
</Router>
,

document.getElementById("root"));