import React from 'react'
import { useState } from 'react'



// Simple counter component that incruments up by one for the user to count each rep

function Counter() {

  const [count, setCount] = useState(0)

  function add() {
      setCount(count => count + 1)
  }

  return (
    <>
    <center>

    <div><h1>{count}</h1><button onKeyDown={add} onClick={add}>^</button></div>
    

    </center>
    </>
  )
}

export default Counter