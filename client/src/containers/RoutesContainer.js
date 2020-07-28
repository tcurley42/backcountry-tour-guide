import React from 'react';
import {connect} from 'react-redux';

import RouteSearch from '../components/RouteSearch';
import Routes from '../components/Routes';
import BarLoader from 'react-spinners/BarLoader';

import {Route, Switch, Link} from 'react-router-dom';

class RoutesContainer extends React.Component {

  // If the trip is defined in the props, render routes and Add Route button
  // Else, render loading
  displayRoutes() {
    if (this.props.trip) {
      return (<div><Link to={`/trips/${this.props.trip.id}/routes/new`}>Add Routes</Link><br/><Routes routes={this.props.trip.routes} tripId={this.props.trip.id}/></div>);
    } else {
      return <div><BarLoader/></div>;
    }
  }

  // If the user is trying to add a new route to this trip, render the RouteSearch component
  // Else, render the display of all routes
  render() {
    return (
      <div>
      <Switch>
      <Route path="/trips/:id/routes/new" render={(routerProps) =>
        <RouteSearch tripId={this.props.trip && this.props.trip.id} />} />
        <Route path="/trips/:id" render={() => this.displayRoutes()}/>
        </Switch>
      </div>
    )
  }
}

// This component needs the trips from the state so map it here
const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(RoutesContainer);
