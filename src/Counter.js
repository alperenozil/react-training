import React, { Component } from 'react'

export class Counter extends Component {
    constructor (props){
        super(props);
        this.state= {
            count: props.initCount
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.change(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.change(+1)}>+</button>
            </div>
        )
    }
    change(amount){
        this.setState({count:this.state.count+amount})
    }
}

export default Counter
