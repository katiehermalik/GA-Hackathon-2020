import React from 'react';
import {Link} from 'react-router-dom'

function ResultsLaugh(props) {
    return (
        <div className='results-laugh'>
            <Link className='laugh-link-jokes' to='#'></Link>
            <Link className='laugh-link-cat' to='/laughs/cat'></Link>
            <Link className='laugh-link-tiktok' to='#'></Link>
            <Link to='/' className='results-go-again'></Link>

        </div>
        

    )
}

export default ResultsLaugh;