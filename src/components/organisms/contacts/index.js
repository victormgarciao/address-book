import React, { Component } from 'react';
import { Link } from 'react-router';

class Contacts extends Component {
    render () {
        return(
            <div>
                <Link to="/NewContact">Go to NewContact</Link>
            </div>
        )
    }
}

export default Contacts;