import React, { useState } from 'react'
import Header from './containers/Header.jsx'
import SurfSpotContainer from './containers/SurfSpotContainer.jsx'
// import MainContainer from './containers/MainContainer.jsx'
import "core-js/stable";
import "regenerator-runtime/runtime";
// import './styles.css';

const App = () => {
 

  return(
    <div>
      {/* <h1>Surf Check</h1>
      <button>click here</button> */}
      <Header/>
      <SurfSpotContainer/>
    </div>
  )
}

export default App;