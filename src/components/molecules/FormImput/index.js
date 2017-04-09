import React, {PropTypes} from 'react';
import { Control, Errors} from 'react-redux-form';
import Label from '../../atoms/Label';
import { themePropType } from '../../../helpers/propTypes';

const displayName='FormInput';

const computeStyles = () => {
  return {
    root: {
      base: {
        marginBottom: 20,
      }
    }
  }
}

const FormInput = (props) => {
  const styles = computeStyles();
  const {
    label,
    model,
    validators,
    errorMessages,
    show,
    theme,
    ...rest
  } = props;

  const inputProps = {
    theme,
    ...rest
  }

  return (
    <div 
      className={displayName}
      style={styles.root.base}
    >
      {label && <Label theme={theme}>{label}</Label>}
      <Control.text 
        model={model}
        validators={validators}
        {...inputProps}
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
  theme: themePropType(),
}

export default FormInput;