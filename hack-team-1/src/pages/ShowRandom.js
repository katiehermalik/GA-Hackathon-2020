import React from 'react';
import {Link} from 'react-router-dom'

const ShowRandom = () => {
  return (
    <div>
      <div className="showrandom"></div>
      <Link to='/' className='results-go-again'></Link>
    </div>
  );
}

export default ShowRandom;