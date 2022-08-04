import React, { useState } from 'react'
import './Teamcss.css'

export const Team = (props) => {
    const [name, setName] = useState("")
    const [scores, setScores] = useState("")
    const [balls, setBalls] = useState("")
    const [dismissal, setDismissal] = useState("")

    const onSubbmit = (e)=>{
        e.preventDefault()
        props.onAdd({name,scores,balls,dismissal})

        // if(!text || !day ){
        // alert("enter something")
        // }
        // // console.log("taskkkk is", text)
        // // console.log("dayyy is", day)
        // // console.log("reminder is", reminder)
        // props.onAdd({text,day,reminder})
    
        // setText("")
        // setDay("")
        // setReminder(false)
    
    
    
    }

    return (
        <>
            <div className='tboxx'>
                <div>
                    {/* <h1>{props.team1v}</h1> */}
                    {/* <h2>INDIA</h2> */}
                </div>
                <form onSubmit={onSubbmit} className='tic'>
                    <div className='inputclass1'>

                        <label>Player Name</label>
                        <input className='input' type="text" name="name" placeholder='Player Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='inputclass2'>

                        <label>Scores</label>
                        <input className='input' type="text" name="name" placeholder='Scores' value={scores} onChange={(e) => setScores(e.target.value)} />
                    </div>
                    <div className='inputclass3'>

                        <label>Balls played</label>
                        <input className='input' type="text" name="name" placeholder='Balls Played' value={balls} onChange={(e) => setBalls(e.target.value)} />
                    </div>
                    <div className='inputclass4'>

                        <label>Dispissal Reason</label>
                        <input className='input' type="text" name="name" placeholder='Dispissal Reason' value={dismissal} onChange={(e) => setDismissal(e.target.value)} />
                    </div>
                    <div>
                        {/* <button className='tbutton'  type='submit'>next player</button> */}
                    </div>

                </form>
            </div>
        </>
    )
}
