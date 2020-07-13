import React from 'react'
import RouteDisplay from './RouteDisplay';
class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    if (this.props.routes && this.props.routes.length > 0) {
      this.fetchTrips(this.props.routes.map(route => route.route_id));
    }
  }

  fetchTrips = (routes) => {
    const data = {routeList: routes.join()}
    fetch("http://localhost:3000/api/v1/fetch", {
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
    .then(data => this.handleData(data))
    .catch(error => console.error(error));
  }

  handleData = (data) => {
    let routeList = []
    for (let i = 0; i < data["trails"].length; i++) {
      routeList.push(data["trails"][i]);
    }
    console.log("Route List: " + routeList)

    this.setState({
      routes: routeList
    })
  }

  render() {
  return(
    <div>
      <ul>
        {this.state.routes && this.state.routes.map(route =>
          <RouteDisplay route={route} key={route.id}/>)}
      </ul>
    </div>
  )
}
}

export default Routes
