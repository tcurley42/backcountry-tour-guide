import React from 'react';

const RouteDisplay = (props) => {
  return(
    <div>
      <div className='route-inner-div'>
        <h3><a href={props.route.url} target="_blank" rel="noopener noreferrer">{props.route.name}</a></h3>
        <h4>{props.route.location}</h4>
      </div>
        <label className='route-display-label'>Difficulty: </label>{props.route.difficulty}<br/>
        <label className='route-display-label'>Rating: </label>{props.route.stars} ({props.route.starVotes} votes)<br/>
        <label className='route-display-label'>Summary: </label>{props.route.summary}<br/>
        <label className='route-display-label'>Distance (miles): </label>{props.route.length}<br/><br/>
        <div className='route-image-div'>
          <img src={props.route.imgSmallMed} alt="routeImage" />
        </div>
        </div>
  )

}

export default RouteDisplay;
