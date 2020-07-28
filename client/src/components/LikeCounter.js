import React from 'react';

class LikeCounter extends React.Component {


  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.counter === 0) this.setState({
      counter: 1
    });
    else this.setState({
      counter: 0
    });
  }

  render() {
    return(
      <div>
      <form onSubmit={e => this.handleOnSubmit(e)}>
      <input type='submit' value='Like' />
      </form>
      {this.state.counter}
      </div>
    )
  }
}

export default LikeCounter;
