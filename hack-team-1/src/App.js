import React from 'react';
import routes from './config/routes';
import Navbar from './components/Navbar';
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
      { routes }

    </div>
  );
  }
}

export default App;
