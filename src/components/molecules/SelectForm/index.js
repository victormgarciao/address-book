import React, {PropTypes} from 'react';
import { Field, Errors} from 'react-redux-form';
import longhand from '@team-griffin/css-longhand';
import cssSides, { Side } from '@team-griffin/css-sides';
import radium from 'radium';
import color from 'color';
import Label from '../../atoms/Label';
import { themePropType } from '../../../helpers/propTypes';
import { typography, roundAllBorders } from '../../../helpers/css';
import { Curvature, Status } from '../../../constants/constants';

const displayName='SelectForm';

const mixColors = (firstColor, secondColor, opacity) =>{
  return firstColor.mix(secondColor, opacity).string();
}

const computeStyles = (props) => {
  const {
    theme,
  } = props;

  const palette = theme.get('palette');
  const themeTypography = theme.get('typography');

  const secondaryColor = palette.get('secondary');
  const mixWhiteSecondary80 = mixColors(
    color('white'),
    color(secondaryColor),
    0.8
  );
  const mixWhiteSecondary75 = mixColors(
    color('white'),
    color(secondaryColor),
    0.75
  )

  return {
    root: {
      base:{
        ...typography.input(themeTypography),
        ...cssSides('padding', Side.A, 10),
        ...longhand('border', {
          width: 1,
          style: 'solid',
          color: palette.get('grey10'),
        }),
        ...roundAllBorders(0),
        marginBottom: 20,
        backgroundColor: '#fff',
        display: 'block',
        width: '100%',
        minHeight: 30,
        color: palette.get('grey05'),
        transition: `
          color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          background-color 0.2s ease-in-out
        `,
        appearance: 'none',
        WebkitAppearance: 'none'
      },

      active: {
        outline: 0,
        boxShadow: `0 0 6px ${mixWhiteSecondary75}`,
        borderColor: mixWhiteSecondary80,
      },

      readonly: {
        backgroundColor: palette.get('grey11'),
        color: palette.get('grey09'),
      },

      disabled: {
        cursor: 'not-allowed',
        backgroundColor: palette.get('grey11'),
        color: palette.get('grey09'),
      },

      // Statuses

      [Status.ERROR]: {
        borderColor: palette.get('red01'),
      },

      // Curvature
      [Curvature.OFF]: {
        ...roundAllBorders(0),
      },

      [Curvature.WEAK]: {
        ...roundAllBorders(3),
      },

      [Curvature.STRONG]: {
        ...roundAllBorders(8),
      },
    }
  };

}

const SelectForm = (props) => {
  const styles = computeStyles(props);
  const {
    label,
    model,
    validators,
    errorMessages,
    show,
    options,
    updateCountry,
    theme
  } = props;

  return(
    <div className={displayName}>
      {label && <Label theme={theme}>{label}</Label>}
      <Field 
        model={model}
        validators={validators}
        onChange={(event) => {
          const value = event.target.value;
          updateCountry('contact.country', value)}
        }
      >
        <select 
          style={styles.root.base}
        >
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
    options: PropTypes.array.isRequired,
    theme: themePropType(),
    updateCountry: PropTypes.func.isRequired
}

export default radium(SelectForm);