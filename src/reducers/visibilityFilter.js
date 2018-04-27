/*
* @Author: folgerfan
* @Date:   2018-04-27 12:49:52
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 14:32:24
*/
import { VisibilityFilters } from "../actions"


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter