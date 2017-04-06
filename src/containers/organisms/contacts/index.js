import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from '../../../components/organisms/contacts';
import store from '../../../store/store';
// TODO
// import { loadSearchLayout } from '../../actions/search-layout-actions';

const mapStateToProps = (state) => {
    debugger;
    contacts: state.contactState.contacts
}

export default connect(mapStateToProps)(Contacts);