import React, { useState } from 'react'

function CalculateScore (){
    const [score1, setScore1] = useState (0)
    const [score2, setScore2] = useState (0)  
    const [score3, setScore3] = useState (0)  
    const [averageScore, setAverageScore] = useState (0)
    const [name, setName] = useState ('')  
    const [message, setMessage] = useState ('')


    let calcAveScore = (event) => {
        event.preventDefault();
        if (score1 === 0 || score2 === 0 || score3 === 0 ) {
            alert  ("Enter a valid score")
        } else {
            let averageScore = parseInt((parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3)
            setAverageScore(averageScore)
            
 
            if (averageScore < 75) {
                setMessage('Failed')
              } else if (averageScore >= 75) {
                setMessage('Passed')
              } 
            }
          }


    return (
        <div className="App">
            <form onSubmit={calcAveScore}>
                <div className="row">
                    <div className="col">
                        <label> Full Name </label>
                        <input type="text" name="full_name" className = {"form control text-input-field"} 
                        value = {name} onChange= {(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col my-5">
                        <label> Score 1 </label>
                        <input type="number" name="score_1" className = {"form control"} 
                        value = {score1} onChange={(e) => setScore1(e.target.value)} min="0" max="100"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col my-5">
                        <label> Score 2 </label>
                        <input type="number" name="score_2" className = {"form control"} 
                        value = {score2} onChange={(e) => setScore2(e.target.value)} min="0" max="100"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col my-5">
                        <label> Score 3 </label>
                        <input type="number" name="score_3" className = {"form control"} 
                        value = {score3} onChange={(e) => setScore3(e.target.value)} min="0" max="100"/>
                    </div>
                </div>
                <div>
                <button className="btn" type='submit'>Submit</button>
                </div>
            </form>
                <div>
                    <h3>Your average score is: {averageScore}</h3>
                    <p>{message}</p>
                </div>
        </div>
      )
    }


    
export default CalculateScore;