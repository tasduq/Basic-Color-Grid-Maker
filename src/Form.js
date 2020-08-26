import React , {Component} from 'react'
import uuid from 'uuid/v4'

class Form extends Component{
	constructor(props){
		super(props)
		this.state = {
			width : "",
			height : "",
			color : ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
		
	}
	
	handleSubmit(evt){
		evt.preventDefault()
		let newBox = {...this.state , id:uuid()}
		this.props.addBoxStyle(newBox)
		this.setState({
			width : "",
			height: "",
			color : ""
		})
	}
	
	render(){
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
					<input 
						type = "number"
						value = {this.state.width}
						name = "width"
						placeholder = "width"
						onChange = {this.handleChange}
					/>
					<br />
					<input
						type = "number" 
						value = {this.state.height}
						name = "height"
						placeholder = "height"
						onChange = {this.handleChange}
					/>
					<br />
					<input
						type = "text"
						value = {this.state.color}
						name = "color"
						placeholder = "color"
						onChange = {this.handleChange}
					/>
					<br />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default Form;