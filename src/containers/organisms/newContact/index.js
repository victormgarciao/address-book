import React, { Component } from 'react';
import NewContact from '../../../components/organisms/newContact';

class NewContactContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return(
            <NewContact />
        )
    }
}

export default NewContactContainer;