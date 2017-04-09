import React, {PropTypes} from 'react';
import { Field, Errors} from 'react-redux-form';
import Select from '../../atoms/Select';
import { themePropType } from '../../../helpers/propTypes';

const displayName='SelectForm';

const SelectForm = (props) => {
    const {
        label,
        model,
        validators,
        errorMessages,
        show,
        theme,
        countries,
        updateCountry
    } = props;

    const options = countries.map((country) => {
        return {value: country, label: country}
    })

    return(
        <div className={displayName}>
            {label && <label>{label}</label>}
            <Field 
                model={model}
                validators={validators}
                component={Select}
                theme={theme}
                options={options}
                onChange={(value) => {
                    updateCountry('contact.country' ,value)}
                }
                valueKey={'label'}
            />
            <Errors
                model={model}
                messages={errorMessages}
                show={show}
            />
        </div>
    );
}

SelectForm.defaultProps = {
}
SelectForm.propTypes = {
    label: PropTypes.node,
    model: PropTypes.string.isRequired,
    validators: PropTypes.object,
    errorMessages: PropTypes.object,
    show: PropTypes.func,
    countries: PropTypes.array.isRequired,
    theme: themePropType(),
    updateCountry: PropTypes.func.isRequired

}

export default SelectForm;