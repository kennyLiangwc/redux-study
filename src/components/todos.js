/*
* @Author: folgerfan
* @Date:   2018-04-27 11:15:36
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 16:15:06
*/
import React from "react"


const Todo = ({text,completed,onClick}) => (
	<li 
		style={{ textDecoration: completed ? "line-through" :"none"}}
		onClick={onClick}
	>{text}</li>
)

export default Todo