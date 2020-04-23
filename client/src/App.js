import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from './actions/fetchTrips';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTrips({type: 'FETCH_TRIPS', payload: {name: 'January Trip'}});
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) =>  {
//     return {
//       trips: state.trips
//     }
// }
//
const mapDispatchToProps = () => {

}

export default connect(null, {fetchTrips})(App);
