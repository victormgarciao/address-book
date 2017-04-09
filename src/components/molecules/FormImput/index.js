import React, {PropTypes} from 'react';
import { Control, Errors} from 'react-redux-form';

const displayName='FormInput';

const FormInput = (props) => {
    const {
        label,
        model,
        validators,
        errorMessages,
        show,
        ...rest
    } = props;

    return (
        <div className={displayName}>
            {label && <label>{label}</label>}
            <Control.text 
                model={model}
                validators={validators}
                {...rest}
            />
            <Errors
                model={model}
                messages={errorMessages}
                show={show}
            />
        </div>
    );
}

FormInput.defaultProps = {
}
FormInput.propTypes = {
    label: PropTypes.node,
    model: PropTypes.string.isRequired,
    validators: PropTypes.object,
    errorMessages: PropTypes.object,
    show: PropTypes.func,
}

export default FormInput;