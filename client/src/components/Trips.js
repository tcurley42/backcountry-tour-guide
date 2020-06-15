import React from 'react';
import {Link} from 'react-router-dom';

const Trips = (props) => {

    return(
      <div>
        {props.trips.map(t =>
          <div key={t.id}><Link to={`/trips/${t.id}`}>{t.name}</Link></div>
        )}

      </div>
    )
}

export default Trips
