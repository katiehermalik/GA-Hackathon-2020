import React from 'react';
import {Link} from 'react-router-dom'

function ShowLaugh() {
    return (
        <div className="cat_background">
            <iframe className="cat_vid" width="800" height="522" src="https://www.youtube.com/embed/7Nn7NZI_LN4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link className= "results-go-again" to="/">Link</Link>
        </div>
    )
}

export default ShowLaugh;