import React from 'react';
import {connect} from 'react-redux';

import RouteInput from '../components/RouteInput';
import Routes from '../components/Routes';

class RoutesContainer extends React.Component {

  displayRoutes() {
    if (this.props.trip) {
      return <Routes routes={this.props.trip.routes}/>;
    } else {
      return "Loading...";
    }
  }

  render() {
    return (
      <div>
        <RouteInput/>
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
