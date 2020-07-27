import React from 'react';
import View from './View';
import Overview from './Overview';
import Header from './Header';


import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Header/> 
      </div>
      
      <div className="mainwrapper" > 
      <View />
      </div>
      
      <div className="card" id="view">
      <Overview/>
      </div>
    </div>
  );
}

export default App;
