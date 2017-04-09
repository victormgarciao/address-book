import React, { PropTypes } from 'react';
import cssSides, { Side } from '@team-griffin/css-sides';
import longhand from '@team-griffin/css-longhand';
import omit from 'lodash/omit';
import px2Em from '../../../helpers/px2Em';
import { themePropType } from '../../../helpers/propTypes';
import { typography, px2EmConfig } from '../../../helpers/css';
import { TypographyFace } from '../../../constants/constants';

const displayName = 'Label';

const computeStyles = (props) => {
  const {
    theme,
  } = props;

  const palette = theme.get('palette');
  const themeTypography = theme.get('typography');

  return {
    root: {
      base: {
      },
    },

    label: {
      base: {
        ...typography.text,
        ...typography.face(themeTypography, TypographyFace.CONTENT),
        ...longhand('font', {
          size: px2Em(14, px2EmConfig),
          weight: 600,
        }),
        ...cssSides('margin', Side.A, 0),
        cursor: 'pointer',
        color: palette.get('grey02'),
      },

      block: {
        display: 'block',
      },
    },

    optionalText: {
      base: {
        paddingLeft: 5,
        fontWeight: 400,
        color: palette.get('grey05'),
      },
    },
  };
};

const Label = (props: Object) => {
  const {
    children,
    block,
    ...domProps
  } = props;

  const styles = computeStyles(props);

  return (
    <label
      className={displayName}
      style={{
        ...styles.label.base,
        ...(block === true) && styles.label.block,
      }}
      {...omit(domProps, [ 'theme', 'styles' ])}
    >
      {children}
    </label>
  );
};

Label.displayName = displayName;
Label.defaultProps = {
  block: false,
};
Label.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  theme: themePropType(),
};

export default Label;
