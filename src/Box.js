import React , {Component} from 'react'

class Box extends Component{
	static defaultProps = {
		width : 0,
		height : 0,
		color:null
	}

    constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	
    
    handleClick(){
		this.props.remove(this.props.id)
	}
	
	
	render(){
		return(
			<div>
				<div style ={{
					width: `${this.props.width}px`,
					height: `${this.props.height}px`,
					backgroundColor : this.props.color
				}} >
				
			   </div>
				<button onClick = {this.handleClick}>X</button>
			</div>
			
		)
	}
}

export default Box;