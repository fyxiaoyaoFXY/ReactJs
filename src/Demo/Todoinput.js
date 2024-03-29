//import React, { Component } from './node_modules/react';
import React, { Component } from 'react'



export default class Todoinput extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick= ()=> {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}
	handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: parseInt(e.target.value===''?0:e.target.value)
        })
    }
	render() {
		return (
			<div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" ref="myText" placeholder="你想做点什么"/>

				</div>
				<div>
					<input type="button" value="保存" onClick={this.handleClick}/>
				</div>
			</div>
			
		)
	}
}


