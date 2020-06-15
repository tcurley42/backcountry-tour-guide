import React from 'react';
import {connect} from 'react-redux';

import RouteSearch from '../components/RouteSearch';
import Routes from '../components/Routes';
import BarLoader from 'react-spinners/BarLoader';

class RoutesContainer extends React.Component {

  displayRoutes() {
    if (this.props.trip) {
      return <Routes routes={this.props.trip.routes} tripId={this.props.trip.id}/>;
    } else {
      return <div><BarLoader/></div>;
    }
  }

  render() {
    return (
      <div>
        <RouteSearch tripId={this.props.trip && this.props.trip.id} />
        {this.displayRoutes()}
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
