/*
* @Author: folgerfan
* @Date:   2018-04-27 10:16:14
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 17:15:29
*/
let TodoIndexId = 0;
export const addTodo = text => ({
	type: "ADD_TODO",
	id: TodoIndexId++,
	text
})

export const toggleTodo = id => ({
	type: "TOGGLE_TODO",
	id
})

export const setVisibilityFilter = filter => ({
	type: "SET_VISIBILITY_FILTER",
	filter
})

export const VisibilityFilters = {
  	SHOW_ALL: 'SHOW_ALL',
  	SHOW_COMPLETED: 'SHOW_COMPLETED',
  	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

