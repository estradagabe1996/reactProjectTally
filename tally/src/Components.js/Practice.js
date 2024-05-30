import React from 'react'
import Timer from './Timer'
import Counter from './Counter'
import '../style/practice.css'


function Practice() {
  return (
    <>

    <div className='practiceTitle'>
      <center>
        <h2>PRACTICE SESSION</h2>
      </center>
    </div>
      <Timer duration={1 * 1 * 60 * 60 * 1000}/>
      <Counter/>
    </>
  )
}

export default Practice