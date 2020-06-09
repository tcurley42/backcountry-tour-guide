import React from 'react';
import {connect} from 'react-redux';
import Geocode from 'react-geocode';

class RouteInput extends React.Component {

  state = {
    location: '',
    lat: '',
    lng: '',
    routeList: []
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.getLatLong(this.state.location);
    // this.getRoutes();
  }

  getLatLong = (location) => {
    Geocode.setApiKey("AIzaSyBRajnL5XopH0hn6q_3c0l6o7c1_w-CGnc");
    // Get latidude & longitude from address.
    Geocode.fromAddress(location).then(
      response => {
        const {lat, lng} = response.results[0].geometry.location;
        this.setState({
          lat: lat,
          lng: lng
        })
      },
      error => {
        console.error(error);
      }
    ).then(
      response => this.getRoutes()
    );
  }

  getRoutes = () => {
    const data = {lat: this.state.lat, lon: this.state.lng}
    fetch("http://localhost:3000/api/v1/search", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  handleData = (data) => {
    let routeList = []
    for (let i = 0; i < 20; i++) {
      routeList.push(data["trails"][i]);
    }

    this.setState({
      routeList: routeList
    })
  }

  render() {
      return(
        <div>
          <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <label>Location</label>
            <input type='text' name='location' value={this.state.location} placeholder='City, State'
              onChange={(e) => this.handleOnChange(e)}/>
            <input type='submit' value="Submit"/>
          </form>
        </div>
      )
  }
}

export default connect(null)(RouteInput)
