import React ,{useState} from 'react'
console.log('render');
function UseState(){
    console.log('c render');
    const [state,setFunction]= useState(0)
    let increment = () => setFunction(state+10)
    let zero =() => setFunction(0)
    let decrement = () => setFunction (state - 10)
    return(
        <div>
            count: {state}
            <br />
            <button onClick={increment}> increment</button>
            <button onClick={zero}> 0</button>
            <button onClick={decrement}> decrement</button>
        </div>
    )
}
export default UseState