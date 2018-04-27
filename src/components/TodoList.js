/*
* @Author: folgerfan
* @Date:   2018-04-27 11:08:29
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 15:51:54
*/
import React from "react"
import Todo from "./todos.js"

const TodoList = ({todos,toggleTodo}) =>(
	<ul>
		{
			todos.map(todo => (
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => toggleTodo(todo.id)}
				></Todo>
			))
		}
	</ul>
)

export default TodoList
