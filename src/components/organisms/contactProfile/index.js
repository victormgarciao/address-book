import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form, Field } from 'react-redux-form';
import { countries } from '../../../api/coutries';

const displayName = 'ContactProfile'

const ContactProfile = (props) => {
    
    const {
        contactId,
        contact,
        updateContact,
    } = props;
    
    return (
        <div  className={displayName}> 
            <Form 
                model='contact'
                onSubmit={(contact) => updateContact(contactId, contact)}
            >
                <label>First Name:</label>
                <Control.text 
                    model='.firstname'
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
    contact: PropTypes.object.isRequired,
    contactId: PropTypes.string.isRequired,
    updateContact: PropTypes.func.isRequired,
}

export default ContactProfile;