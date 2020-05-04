import React from 'react';
import Trip from './Trip';

const Trips = (props) => {

    return(
      <div>
        {props.trips.map(t => <Trip key={t.id} name={t.name} description={t.description}
          routes={t.routes} trip={t}/>)}
      </div>
    )
}

export default Trips
