import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form, Field, Errors } from 'react-redux-form';
import { countries } from '../../../api/coutries';
import { browserHistory } from 'react-router';
import { isStringRequired } from '../../../schemas/contact.schema';

const displayName = 'ContactProfile'

const ContactProfile = (props) => {

    const {
        contactId,
        updateContact,
    } = props;

    return (
        <div  className={displayName}> 
            <Form 
                model='contact'
                onSubmit={(contact) => {
                    updateContact(contactId, contact);
                    browserHistory.push('/');
                }}
            >
                <label>First Name:</label>
                <Control.text 
                    model='.firstname'
                    validators={{
                        isRequired: 
                        (val) => {
                            return isStringRequired(val)
                            debugger

                        },
                        // isEmail, // ES6 property shorthand
                    }}
                />

                <Errors
                    model=".firstname"
                    messages={{
                        isRequired: 'Please provide an first name.',
                    }}
                />

                <label>Last Name:</label>
                <Control.text 
                    model='.lastname' 
                />

                <label>Email:</label>
                <Control.text
                    type='email'
                    model='.email' 
                />
                
                <label>Country:</label>
                <Field 
                    model='.country'
                >
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
                    Update contact
                </button>
            </Form>
            <Link to={'/'}>
                'Go back to contacts'
            </Link>
        </div>
    );
}

ContactProfile.defaultProps = {
}
ContactProfile.propTypes = {
    contactId: PropTypes.string.isRequired,
    updateContact: PropTypes.func.isRequired,
}

export default ContactProfile;