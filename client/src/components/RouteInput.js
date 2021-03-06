import React from 'react';
import {connect} from 'react-redux';
import {addRoute} from '../actions/addRoute';
import RouteDisplay from './RouteDisplay.js';

class RouteInput extends React.Component {


  handleOnSubmit = (e) => {
    this.props.addRoute(
      {
        route_id: this.props.route.id,
        trip_id: this.props.tripId
      },
      this.props.tripId
    );
  }

  render() {
    return(
      <div className='route-div'>
      <form onSubmit={e => this.handleOnSubmit(e)}>
        <RouteDisplay route={this.props.route}/>
        <div className='route-submit'>
        <input type="submit" value="Add Route"/>
        </div>
      </form>
      </div>
    )
  }
}

// This component only cares about this form, does not need any knowledge of
// Redux store
export default connect(null, {addRoute})(RouteInput);
