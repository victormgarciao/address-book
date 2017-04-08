import React, {PropTypes} from 'react';
import { Field, Errors} from 'react-redux-form';

const displayName='SelectForm';

const SelectForm = (props) => {
    const {
        label,
        model,
        validators,
        errorMessages,
        show,
        options
    } = props;

    return(
        <div className={displayName}>
            {label && <label>{label}</label>}
            <Field 
                model={model}
                validators={validators}
            >
                <select>
                    {options.map((option) => {
                        return(
                            <option 
                                value={option}
                                key={option}
                            >
                                {option}
                            </option>
                        );
                    })}
                </select>
            </Field>
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
    options: PropTypes.array.isRequired
}

export default SelectForm;