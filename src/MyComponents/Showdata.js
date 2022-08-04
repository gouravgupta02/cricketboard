import React from 'react';
import './Showdatacss.css'

export const Showdata = (props) => {
    return (
        <>
            <div className='sbox'>
                <div>
                    {/* <p>Players's Name</p> */}
                    <p>{props.name}</p>
                </div>
                <div>
                    {/* <p>Scores</p> */}
                    <p>{props.scores}</p>
                </div>
                <div>
                    {/* <p>Balls played </p> */}
                    <p>{props.balls}</p>
                </div>
                <div>
                    {/* <p>Dismissal Reason</p> */}
                    <p>{props.dismissal}</p>
                </div>
            </div>
        </>
    )
}
