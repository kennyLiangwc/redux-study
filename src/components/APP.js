/*
* @Author: folgerfan
* @Date:   2018-04-27 10:12:09
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 16:47:53
*/
import React from "react"
import AddTodo from "../containers/AddTodo.js"
import VisibleTodoList from "../containers/VisibleTodoList.js"
import FilterList from "../containers/FilterList.js"

const APP = () =>(
	<div>
		<AddTodo />
		<VisibleTodoList />
		<FilterList />
	</div>
)
export default APP