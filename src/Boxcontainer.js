import React , {Component} from 'react'
import Box from './Box'
import Form from './Form'

class Boxcontainer extends Component{
	constructor(props){
		super(props)
		this.state={
			boxes : [
				
			]
		}
		this.addBoxStyle = this.addBoxStyle.bind(this)
		this.remove = this.remove.bind(this)
	}
	
	addBoxStyle(newBox){
		this.setState(st => {
			return{
				boxes : [...st.boxes , newBox]
			}
		})
	}
	
	remove(boxid){
		this.setState(st => {
			return{
				boxes : [...st.boxes.filter(box => box.id !== boxid)]
			}
		})
		
	}
	
	render(){
		let boxes = this.state.boxes.map((box) => (
			<Box width = {box.width} height = {box.height} color = {box.color} remove = {this.remove} key = {box.id} id ={box.id} />
		))
		return(
			<div>
				<Form addBoxStyle = {this.addBoxStyle} />
				{boxes}
				
			</div>
		)
	}
}

export default Boxcontainer;