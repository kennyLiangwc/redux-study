/*
* @Author: folgerfan
* @Date:   2018-04-27 10:07:55
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 14:33:49
*/
import { combineReducers } from "redux"
import todos from "./todos.js"
import visibilityFilter from "./visibilityFilter.js"

export default combineReducers({
	todos,
	visibilityFilter
})
