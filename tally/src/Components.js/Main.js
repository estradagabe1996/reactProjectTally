import React from 'react'
import Button from 'react-bootstrap/Button';
import '../style/main.css'


function Main() {

  return (
    <>
        <div className='mainContainer'>
            <center>
                <h1>TALLY</h1>
                <br/>
                <h2>Welcome to Tally. A progress tracking application designed<br/> to bring focus back to your hobbies or studies. We here at Tally<br/> believe "practice makes perfect." But not all practice is good<br/> practice, in order to achieve the best results we provide guided<br/> sessions to assist our clients during practice sessions<br/> and earn the best results.</h2>
            </center>
        </div>
        <div className='stepsContainer'>

            <div className='getStarted'>
                <center><h2>How to get started!</h2></center>
            </div>
            <div className='stepOne'>
                <h2>Step 1</h2>
                <h3>Begin by created a free account here!</h3>
            </div>
            <div className='stepTwo'>
                <h2>Step 2</h2>
                <h3>Input a song into the index to begin tracking your progress. Once inputed select a amount a time for the pracitce session and press begin.</h3>
            </div>
            <div className='stepThree'>
                <h2>Step 3</h2>
                <h3>In the "practice session" there will be a counter function. Once a rep has been achieved, update the counter to track overall progress.</h3>
            </div>
            <div className='stepFour'>
                <h2>Step 4</h2>
                <h3>Provide feed back after every practice session to gather to highest amount of data and achieve the best results. Happy Practicing!</h3>
            </div>
        </div>
        <div className='beginButton'>
            <center>
                <div className="d-grid gap-2">
                    <a href='/login'>
                    <Button type='button' variant="secondary" size="lg" onClick="location.href='http://localhost:3000/login'">
                        BEGIN NOW
                    </Button>
                    </a>

                </div>
            </center>
        </div>



    </>
  )
}

export default Main