import React from 'react';
import {connect} from 'react-redux';
import {addTrip} from '../actions/addTrip';

class TripInput extends React.Component {

  // TripInput() {
  //   super()
  // }

  state = {
    name: '',
    description: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTrip(this.state);
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
        <div>
          <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Trip Name:</label>
            <input type='text' name='name' value={this.state.name}
              placeholder='Name' onChange={e => this.handleOnChange(e)}/>
              <br/>
          <label>Trip Description:</label>
            <input type='text' name='description' value={this.state.description}
              placeholder='Description' onChange={e => this.handleOnChange(e)}/>
              <br/>
            <input type='submit' value="Create Trip" />
          </form>
        </div>
    )
  }
}

// This component only cares about this form, does not need any knowledge of
// Redux store
export default connect(null, {addTrip})(TripInput);
