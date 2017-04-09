import React, { PropTypes } from 'react';
import longhand from '@team-griffin/css-longhand';
import cssSides, { Side } from '@team-griffin/css-sides';
import radium, { Style } from 'radium';
import toArray from 'lodash/toArray';
import color from 'color';
import omit from 'lodash/omit';
import { themePropType } from '../../../helpers/propTypes';
import { typography, roundAllBorders } from '../../../helpers/css';
import { Curvature, Status } from '../../../constants/constants';

const displayName = 'Input';

const mixColors = (firstColor, secondColor, opacity) =>{
  return firstColor.mix(secondColor, opacity).string();
}

const computeStyles = (props: Object) => {
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
      base: {

      },
    },
    input: {
      base: {
        ...typography.input(themeTypography),
        backgroundColor: '#fff',
        display: 'block',
        width: '100%',
        minHeight: 30,
        ...cssSides('padding', Side.A, 10),
        color: palette.get('grey05'),
        ...longhand('border', {
          width: 1,
          style: 'solid',
          color: palette.get('grey10'),
        }),
        ...roundAllBorders(0),
        transition: `
          color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          background-color 0.2s ease-in-out
        `,
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

      withPrefix: {
        marginTop: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },

      withSuffix: {
        marginTop: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  };
};

const createPsuedoStyles = (palette) => {
  return (
    <Style
      scopeSelector={`.${displayName}`}
      rules={{
        [`.${displayName}__Control::-webkit-input-placeholder`]: {
          letterSpacing: 0.2,
          color: palette.get('placeholderColor'),
          transition: 'color 0.2s ease-in-out',
        },
        [`.${displayName}__Control:focus::-webkit-input-placeholder`]: {
          color: palette.get('placeholderFocusColor'),
        },
      }}
    />
  );
};

const Input = (props: Object) => {
  const styles = computeStyles(props);
  const {
    theme,
    active,
    status,
    withPrefix,
    withSuffix,
    ...inputProps
  } = props;
  const {
    disabled,
    readOnly,
  } = inputProps;

  return (
    <span
      className={displayName}
      style={styles.root.base}
    >
      {createPsuedoStyles(theme.get('palette'))}
      <input
        className={`${displayName}__Control`}
        style={[
          styles.input.base,
          styles.input[status],
          styles.input[theme.get('curvature')],
          (active === true) && styles.input.active,
          (disabled === true) && styles.input.disabled,
          (readOnly === true) && styles.input.readonly,
          (withPrefix === true) && styles.input.withPrefix,
          (withSuffix === true) && styles.input.withSuffix,
        ]}
        {...omit(inputProps, [ 'input', 'meta' ])}
      />
    </span>
  );
};

Input.displayName = displayName;
Input.defaultProps = {
  type: 'text',
  active: false,
  status: Status.DEFAULT,
  withPrefix: false,
  withSuffix: false,
};
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  status: PropTypes.oneOf(toArray(Status)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  active: PropTypes.bool,
  withPrefix: PropTypes.bool,
  withSuffix: PropTypes.bool,
  theme: themePropType(),
};

export { Status };
export default radium(Input);
