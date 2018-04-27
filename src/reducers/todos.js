/*
* @Author: folgerfan
* @Date:   2018-04-27 14:16:32
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 16:26:47
*/
const todos = (state = [],action) => {
	switch(action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					id: action.id,
					completed: false,
					text: action.text
				}
			]
		case "TOGGLE_TODO":
			return state.map(v =>
				(v.id === action.id) ? {...v,completed: !action.completed} : v
			)
		default:
			return state
	}
}
export default todos