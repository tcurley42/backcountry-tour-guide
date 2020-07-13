import React from 'react';
import {connect} from 'react-redux';

import RouteSearch from '../components/RouteSearch';
import Routes from '../components/Routes';
import BarLoader from 'react-spinners/BarLoader';

import {Route, Switch, Link} from 'react-router-dom';

class RoutesContainer extends React.Component {

  displayRoutes() {
    if (this.props.trip) {
      return (<div><Link to={`/trips/${this.props.trip.id}/routes/new`}>Add Routes</Link><br/><Routes routes={this.props.trip.routes} tripId={this.props.trip.id}/></div>);
    } else {
      return <div><BarLoader/></div>;
    }
  }

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

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(RoutesContainer);
