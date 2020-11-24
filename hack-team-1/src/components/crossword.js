import React from 'react';
import axios from 'axios';

class Crossword extends React.Component {
    state = {
        activity: []
    } 

    // CROSSWORD API\
    renderCrossword = () => {}
    axios.get('https://raw.githubusercontent.com/doshea/nyt_crosswords/master/#{year}/#{month}/#{day}.json')
    .then((response) => {
        console.log( response.data );
    } )
    render () {
        return (
            <div>
                <ul> 
                <h1> Helloooo </h1>
                </ul>
    
            </div>
        )
    }
    
    }
    
    export default Crossword;