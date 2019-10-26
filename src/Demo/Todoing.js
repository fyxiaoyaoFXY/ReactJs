import React, { Component } from 'react';


export default class Todoing extends Component {
	constructor (props) {
		super(props);

		this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleFinished=()=>{
		var status = this.props.item.status;

		status = (status === 0 ? 1 : 0);

		var obj = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		}
		
		this.props.finishedChange(obj);	
	}

	handleDelete=()=> {
		this.props.totalChange(this.props.item);
	}

	render() {
		const item = this.props.item;

		return (
			<li key={item.id} >
				<span 
					onClick={this.handleFinished} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : '#000'}}
				></span>
				<span>{ item.name }</span>
				<span onClick={this.handleDelete} className="delete-btn">删除</span>
			</li>
		)
	}
}



