import React from 'react';
import {Link} from 'react-router-dom';
import LikeCounter from '../components/LikeCounter.js';

const Trips = (props) => {

    // Display trips as links to the trip show page
    return(
      <div>
        {props.trips.map(t =>
          <div key={t.id} className='trip-div'><Link to={`/trips/${t.id}`} className='trip'>{t.name}</Link><LikeCounter/> </div>
        )}

      </div>
    )
}

export default Trips
