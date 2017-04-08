import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form, Field } from 'react-redux-form';
import { countries } from '../../../api/coutries';
import { browserHistory } from 'react-router';

const displayName = 'NewContact';

const NewContact = (props) => {
    const {
        resetFormModel,
        addContact
    } = props;

    resetFormModel('contact');

    return(
        <div className={displayName}>
            <Form 
                model='contact'
                onSubmit={(contact) => {
                    addContact(contact);
                    browserHistory.push('/')
                }}
                
            >
                <label>First Name:</label>
                <Control.text model='.firstname'/>

                <label>Last Name:</label>
                <Control.text model='.lastname'/>

                <label>Email:</label>
                <Control.text
                    type='email'
                    model='.email' 
                />
                
                <label>Country:</label>
                <Field model='.country'>
                    <select>
                        {countries.map((country) => {
                            return(
                                <option 
                                    value={country}
                                    key={country}
                                >
                                    {country}
                                </option>
                            );
                        })}
                    </select>
                </Field>

                <button type='submit'>
                    Add contact
                </button>
            </Form>
            <Link to='/'>Go to contacts</Link>
        </div>
    )
}

NewContact.defaultProps = {
}
NewContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    resetFormModel: PropTypes.func.isRequired
}

export default NewContact;