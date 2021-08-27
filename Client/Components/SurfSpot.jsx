import React from 'react';

const SurfSpot = (props) => {
  return(
    <div className='beach'>
      <p>hi</p>
      <h4>Beach: {props.beach}</h4>
      <h4>Surf: {props.surf}</h4>
      <h4>Weather: {props.weather}</h4>
      <h4>Side of island: {props.shore}</h4>
    </div>
  )
}


export default SurfSpot;