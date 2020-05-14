import React from 'react';
import {connect} from 'react-redux';

import RouteInput from '../components/RouteInput';
import Routes from '../components/Routes';

class RoutesContainer extends React.Component {

  render() {
    return (
      <div>
        <RouteInput/>
        <Routes/>
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
