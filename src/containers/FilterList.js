/*
* @Author: folgerfan
* @Date:   2018-04-27 16:40:43
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-04-27 17:17:29
*/
import React from "react"
import { connect } from "react-redux"
import Link from "../components/Link.js"
import { setVisibilityFilter } from "../actions"


const mapStateToProps = (state,ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch,ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})




export default connect(mapStateToProps,mapDispatchToProps)(Link)