import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    state = {
        jokes: []
    } 

    // Jokes API
    renderJokes = () => {
        // BORED IDEAS
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
            console.log( response.data );

            const prevState = this.state.jokes.slice()
            prevState.push(response.data)
            this.setState({ jokes: prevState })
        })
        
    }
    componentDidMount() {
        this.renderJokes()
        this.renderJokes()
        this.renderJokes()
    }
   
    printJokes() {
        return this.state.jokes.map(( jokes ) => {
            return (
                <>
                <li key = { jokes.id }> { jokes.setup } </li>

                <li key = { jokes.id }> { jokes.punchline } </li>
                </>
            )
        })

    }




render () {
    return (
        <div>
            <ul> 
            { this.printJokes() }
            </ul>

        </div>
    )
}

}

export default Jokes;