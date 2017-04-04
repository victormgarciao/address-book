import React, { Component } from 'react';
import { Link } from 'react-router';

class NewContact extends Component {
    render () {
        return(
            <Link to="/">Go to contacts</Link>
        )
    }
}

export default NewContact;