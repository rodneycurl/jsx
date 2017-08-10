import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    // getinitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish){
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] =
    // this.state.fishes.fish1 = fish
    // set state
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Good Food" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
