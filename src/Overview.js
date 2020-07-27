import React from 'react';
import data from './data';
import './App.css';
import { findByLabelText } from '@testing-library/react';

class Overview extends React.Component{
    render(){
        return(
           
          <div className="main" style={{display:"flex", flexDirection:"column"}} id="overview">
               <div>
                <h5>OVERVIEW - TODAY</h5>
               </div>

            <div className="main">
                {data.map(item=> 
                    <div className="wrapper2">
                    <div className="card">
                        <p>Likes</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                    <div className="card">
                        <h2>{item.likes}</h2>
                    <div style={{marginRight:-22}} className="cardnarrow"> 
                        <img className="arrows"  src={item.arrow} alt="arrow"/>   
                        <h3>{item.percentage}</h3>
                    </div>    
                    </div>
                    </div>
                )}
                </div>
             
                
            <div className="main" id="mainover">
            {data.map(item=> 
                    <div className="wrapper2">
                    <div className="card">
                        <p>{item.text}</p>
                        <img src={item.icon} alt="icon" />
                    </div>
                    <div className="card">
                        <h2>{item.views}</h2>
                    <div style={{marginRight:-22}} className="cardnarrow"> 
                        <img className="arrows" src={item.arrow} alt="arrow"/>   
                        <h3>{item.perc}</h3>
                    </div>    
                    </div>
                    </div>
                )}

                </div>
            </div>
           
        )  
    }
}

export default Overview