import React, { useState, useEffect } from 'react'
  
function Idk() {
  console.log(' c render')
  const [state, setFunction] = useState(0)
  const [azad, setAzad] = useState(0)
  const [idk, setIdk] = useState(0)
  let increment = () => setFunction(state + 10)
  //   let zero = () => setFunction(0)
  let Sazad = () => setAzad(azad - 10)
  let Sidk = () => setIdk(idk + 10)
  //   let zero = () => setFunction(0)
  let decrement = () => setFunction(state - 10)

  useEffect(() => {
    console.log('always useeffect')
  })
  useEffect(() => {
    console.log('only one useeffect')
  },[])
  useEffect(() => {
    console.log('only with  state,idk')
  },[state,idk])
  useEffect(() => {
    console.log('only with azad')
  },[azad])

  return (
    <div>
      count : {state}
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={() => setFunction(0)}>0</button>
      <button onClick={Sazad}>Sazad</button>
      <button onClick={Sidk}>Sidk</button>
      <button onClick={() => setFunction(0)}>0</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Idk