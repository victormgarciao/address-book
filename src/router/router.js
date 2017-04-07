import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ContactsContainer from '../containers/organisms/contacts';
import NewContactContainer from '../containers/organisms/newContact';
import ContactProfileContainer from '../containers/organisms/contactProfile';


export default (
    <Router history={browserHistory}>
        <Route path='/' component={ContactsContainer}/>

        <Route path='/contacts'>
            <Route path=':contactId' component={ContactProfileContainer}/>
        </Route>

        <Route path='/newContact' component={NewContactContainer}/>
    </Router>
);