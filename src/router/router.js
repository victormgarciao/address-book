import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ContactsContainer from '../containers/organisms/contacts';
import NewContactContainer from '../containers/organisms/newContact';

export default (
    <Router history={browserHistory}>
        <Route path='/' component={ContactsContainer} />
        <Route path='/newContact' component={NewContactContainer} />
    </Router>
);