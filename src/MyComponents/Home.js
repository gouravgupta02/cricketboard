import React, { useState } from 'react'
import { Team } from './Team';
import './Homecss.css'
import {
    NavLink
} from "react-router-dom";


export const Home = () => {
    const [team1v, setTeam1v] = useState("India")
    const [team2v, setTeam2v] = useState("Pakistan")

    // let team1v, team2v;
    return (
        <>
            <div className='hbox'>

                <div className='hbox1'>

                    <div className='smallbox'>
                        <div className='halfbox'>
                            <p >Team 1</p>
                            <input className='input' type="text" name="team1v" value={team1v} onChange={(e) => setTeam1v(e.target.value)} />
                        </div>
                        <div className='halfbox'>
                            <p>Team 2</p>
                            <input className='input' type="text" name='team2v' value={team2v} onChange={(e) => setTeam2v(e.target.value)} />

                        </div>

                        {team1v === team2v ? alert("Both the teams can't be SAME ") : ""}
                    </div>
                    <div className='vsmallbox'>
                        <div className='buttonsh' >

                            <NavLink to="/team" className="navbtn" type="submit"  > <h1>Next</h1></NavLink>
                        </div>
                    </div>


                </div>
            </div>
            <Team team1v={team1v}/>
        </>
    )
}
