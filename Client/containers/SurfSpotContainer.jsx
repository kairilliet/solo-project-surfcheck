import React, { useState, useEffect } from 'react';
import DropdownList from '../components/DropdownList.jsx';
import SurfSpot from '../components/SurfSpot.jsx';


const SurfSpotContainer = () => {
  const [surfSpots, setSurfSpots] = useState([]);

  // componentDidMount() insdie of this a fetch request to pull beaches
  // update state with data from the beaches.

  const skillLevelPicked = (e, choice) => {
    e.preventDefault();
    fetchData();
    // console.log(surfSpots);
    if (choice === 'ankle biter') {
      const beaches = surfSpots.filter(beach => {
        return beach.surf === '0-2 feet'
      });
      console.log(beaches);
      const test = [{beach: 'kailua'}, {beach: 'malibu'}];
      setSurfSpots(test);
    }
    if (choice === 'waist high') {
      const beaches = surfSpots.filter(beach => {
        return beach.surf === '1-3 feet'
      });
      console.log(beaches);
      setSurfSpots(beaches);
      console.log(surfSpots)
    }
    if (choice === 'shoulder high') {
      const beaches = surfSpots.filter(beach => {
        return beach.surf === '2-4 feet'
      });
      console.log(beaches);
      setSurfSpots(beaches);
    }
    if (choice === 'head high and up') {
      const beaches = surfSpots.filter(beach => {
        return beach.surf === '3-5 feet'
      });
      console.log(beaches);
      setSurfSpots(beaches);
    }
    
  }

  const fetchData = () => {
    // e.preventDefault();
    fetch('https://hawaiibeachsafety.com/rest/conditions.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      setSurfSpots(data)
      // console.log("SURF SPOTS: ", surfSpots)
    })
    .catch(err => console.log(err));
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const beaches = [];
  for (let i = 0; i < surfSpots.length; i++) {
    beaches.push(<SurfSpot key={surfSpots[i].beach_id + i.toString()} beach={surfSpots[i].beach} shore={surfSpots[i].shore} weather={surfSpots[i].weather} surf={surfSpots[i].surf}/>)
  }
  // outside component did mount loop through the state, create a new surf spot for every item in the state and pass in props

  return (
    <div id='container'>
      <DropdownList skillLevelPicked={skillLevelPicked} />
      {/* <button
      onClick={(e) => {
        
        skillLevelPicked(e);
        e.preventDefault();
        // setSurfSpots([{beach: 'kailua'}])
        console.log(surfSpots);
      }}
      > fetch
      </button> */}
      {/* <ul>
        surfSpots.map((beach) => {
          <li key={surfSpots.id}>{surfSpots.beach}</li>
        });
      </ul> */}
      {beaches}
      {/*render surf spots array*/}
    </div>
  )
}


export default SurfSpotContainer;