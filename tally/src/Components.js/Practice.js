import React from 'react'
import Timer from './Timer'
import Counter from './Counter'
import '../style/practice.css'
import { useContext } from 'react'
import { Usercontext } from './Loginpage'
import '../style/main.css'


// Once the song is selcted the practice function is then used to display the timer and counter components

function Practice() {

  const userID = useContext(Usercontext);

  return (
    <>

    <div className='practiceTitle'>
      <center>
        <h2>Practice Session</h2>
      </center>
    </div>
    <div className='practiceFlex'>
        <div>
          <Timer duration={1 * 1 * 60 * 60 * 1000}/>
        </div>
        <div>
          <Counter/>
        </div>
    </div>
    </>
  )
}

export default Practice