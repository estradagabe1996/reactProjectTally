import React from 'react'
import { useState } from 'react'


function Counter() {

  const [count, setCount] = useState(0)

  function add() {
      setCount(count => count + 1)
  }

  return (
    <>
    <center>

    <div>{count}</div>
    <button onKeyDown={add} onClick={add}>^</button>

    </center>
    </>
  )
}

export default Counter