import React, {PropTypes} from 'react';
import { Form as FormRedux} from 'react-redux-form';

const displayName='Form';

const Form = (props) => {

    const {
        model,
        onSubmit,
        children
    } = props;

    return(
        <FormRedux
            model={model}
            onSubmit={onSubmit}
            className={displayName}
        >
            {children}
        </FormRedux>
    );
}

Form.defaultProps = {
}
Form.propTypes = {
    model: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Form;