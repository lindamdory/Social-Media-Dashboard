import React from 'react'
import ToggleSwitch from './ToggleSwitch'

function Header(){
    return(
        <div className="card" id="header">
            <div className="headercol">
            <h1>Social Media Dashboard</h1>
            <h5 >Total Followers: 23,005</h5>
            </div>

            <div className="card">
               
                <ToggleSwitch />
            </div>
            
        </div>
    )
}

export default Header