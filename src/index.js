/*
* @Author: folgerfan
* @Date:   2018-04-27 10:01:53
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 10:37:53
*/
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import APP from "./components/APP.js"

const store = createStore(rootReducer);






ReactDOM.render(
	<Provider store={store}>
		<APP />
	</Provider>	,
document.getElementById("root"))