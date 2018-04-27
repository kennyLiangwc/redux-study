/*
* @Author: folgerfan
* @Date:   2018-04-27 10:57:53
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 15:51:17
*/
import React from "react"
import { connect } from "react-redux"
import TodoList from "../components/TodoList.js"
import { VisibilityFilters, toggleTodo } from "../actions"

const getVisibleTodos = (todos,filter) => {
	switch(filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos(t => t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos(t => !t.completed)
		default:
			throw new Error("Unknow filter"+filter)
	}
}


const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos,state.visibilityFilter)
})
const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)


