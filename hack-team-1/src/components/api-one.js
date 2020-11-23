import React from 'react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

class Api extends React.Component {
    state = {
        activity: []
    } 
    
    componentDidMount() {
        axios.get('https://www.boredapi.com/api/activity?participants=1')
        .then((response) => {
            console.log( response.data.activity );

            this.setState({ activity: response.data.activity });
        });
        
       
    }
   




render () {
    return (
        <div>
        { this.state.activity }
        
        </div>
    )
}

}

export default Api;