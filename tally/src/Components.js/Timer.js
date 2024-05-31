import React from 'react'
import { useState, useEffect } from 'react'


// Timer component is functional but only counts down from 1 hour at the moment, would like to add more time incraments

function Timer( {duration} ) {

  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time-1000);
    }, 1000)
  }, [time]);

  const formatTime = (milsec) => {
    let totalSeconds = parseInt(Math.floor(milsec / 1000))
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
    let totalHours = parseInt(Math.floor(totalMinutes / 60))
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60)
    let minutes = parseInt(totalMinutes % 60)
    let hours = parseInt(totalHours % 24)

    return `${hours}: ${minutes}: ${seconds}`

  }

  return (
    <div className='timer'>
      <div className='container'>
        <div className='timerContainer'>
          <h1>{formatTime(time)}</h1>
        </div>
      </div>
    </div>
  )
}

export default Timer