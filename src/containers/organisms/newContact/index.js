import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewContact from '../../../components/organisms/newContact';
import { a_addContact } from '../../../actions/contacts';
import { actions } from 'react-redux-form';

const NewContactContainer = (props) => {
  const {
    resetFormModel
  } = props;

  resetFormModel('contactState');

  return <NewContact {...props}/>;
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({ 
  addContact: bindActionCreators(a_addContact, dispatch),
  resetFormModel: bindActionCreators(actions.reset, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContactContainer);