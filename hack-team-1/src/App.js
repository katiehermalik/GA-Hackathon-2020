import React from 'react';
import Api from './components/api-one';
import Jokes from './components/AwfulJokes';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false
  }
  loggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() {
  return (
    <div className="App">
      <Navbar loggedIn={ this.loggedIn } signedIn={ this.state.loggedIn }/>
      <h1>HELLO WORLD</h1>
      {/* <Api /> */}
      <Jokes />
    </div>
  );
  }
}

export default App;
