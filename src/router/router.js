import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Contacts from '../components/contacts';
import NewContact from '../components/newContact';

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Contacts} />
        <Route path='/newContact' component={NewContact} />
    </Router>
);