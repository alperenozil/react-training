import React, {useState} from 'react'

function CounterHooks(props) {
    const [state, setState]=useState({count:props.initCount});
    return (
        <div>
            <button onClick={()=>setState({count:state.count-1})} >-</button>
            <span>{state.count}</span>
            <button onClick={()=>setState({count:state.count+1})}>+</button>
        </div>
    )
}

export default CounterHooks
