import React from 'react'
import data from './data'
import './App.css';


class View extends React.Component {
    render(){
        return(
            <div className="main" id="main">
                
                {data.map(item => 
                    <div className="wrapper" id="mainwrap">
                        <div className="card">
                            <img src={item.icon} alt="icon"/>
                            <p>{item.handle}</p>
                        </div>

                        <div className="cardcolumn" >
                            <h2>{item.followers}</h2> 
                            <p style={{marginTop:-15}}>FOLLOWERS</p>
                        </div>
                        <div className="cardnarrow">
                        <img className="arrows" src={item.arrow} alt="arrow"/>
                        <h3>{item.today}</h3>
                        </div>

                    </div>
                 )}
            </div>
        )
    }
}

export default View