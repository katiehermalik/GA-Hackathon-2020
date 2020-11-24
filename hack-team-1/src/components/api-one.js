import React from 'react';
import axios from 'axios';



// BASE TEMPLATE for reference
class Api extends React.Component {
    state = {
        activity: []
    } 
    
    renderActivity = () => {
        // BORED IDEAS
        axios.get('https://www.boredapi.com/api/activity?participants=1')
        .then((response) => {
            console.log( response.data );

            const prevState = this.state.activity.slice()
            prevState.push(response.data)
            this.setState({ activity: prevState })
        })
        
    }
    componentDidMount() {
        this.renderActivity()
        this.renderActivity()
        this.renderActivity()
    }
   
    printActivity() {
        return this.state.activity.map(( activity ) => {
            return (
                <li key = { activity.key }> { activity.activity } </li>

            )
        })

    }




render () {
    return (
        <div>
            <ul> 
            { this.printActivity() }
            </ul>

        </div>
    )
}

}

export default Api;