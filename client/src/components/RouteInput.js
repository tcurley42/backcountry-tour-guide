import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {addRoute} from '../actions/addRoute';
import RouteDisplay from './RouteDisplay.js';

class RouteInput extends React.Component {

  state = {
    refresh: false
  }

  handleOnSubmit = (e) => {
    this.props.addRoute(
      {
        route_id: this.props.route.id,
        trip_id: this.props.tripId
      },
      this.props.tripId
    );
    this.setState({
      refresh:true
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={e => this.handleOnSubmit(e)}>
        <RouteDisplay route={this.props.route}/>
        <input type="submit" value="Add Route"/>
      </form>
      </div>
    )
  }
}

// This component only cares about this form, does not need any knowledge of
// Redux store
export default connect(null, {addRoute})(RouteInput);
