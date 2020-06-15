import React from 'react';

const RouteDisplay = (props) => {
  return(
    <div>
      <h3><a href={props.route.url} target="_blank" rel="noopener noreferrer">{props.route.name}</a></h3>
      <h4>{props.route.location}</h4>
      <label>Difficulty: </label>{props.route.difficulty}<br/>
      <label>Rating: </label>{props.route.stars} ({props.route.starVotes} votes)<br/>
      <label>Summary: </label>{props.route.summary}<br/>
      <label>Distance (miles): </label>{props.route.length}<br/><br/>
      <img src={props.route.imgSmallMed} alt="routeImage"/>
    </div>
  )

}

export default RouteDisplay;
