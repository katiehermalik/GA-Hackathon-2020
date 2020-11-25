import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home"></div>
      <div className="laugh" ></div>
      <Link to='/random'><input
        className="feel GO"
        type="button" /></Link>
  
        <Link to='/laughs'><input
        className="feel hover_1"
        type="button" /></Link>

        <input
        className="feel hover_2"
        type="button" />

        <input
        className="feel hover_3"
        type="button" />

        <input
        className="feel hover_4"
        type="button" />

        <Link to='/engageretro'><input
        className="feel hover_5"
        type="button" /></Link>

        <input
        className="feel hover_6"
        type="button" />
    </div>

  );
}

export default Home;

