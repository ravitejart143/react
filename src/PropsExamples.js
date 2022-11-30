import React from "react"

class PropsExample  extends React.Component{
	render(){
		
		return(
			<div>
				<h>about props</h>
				<p>Name:{this.props.name}</p>
				<p>Age:{this.props.age}</p>
			</div>
			)
				
				
	}




}
export default PropsExample