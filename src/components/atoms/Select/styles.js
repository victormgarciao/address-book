import cssSides, { Side } from '@team-griffin/css-sides';
import longhand from '@team-griffin/css-longhand';
import merge from 'lodash/merge';
import { paletteResolver } from './palette';
import { typography, roundAllBorders } from '../../../helpers/css';
import { Curvature, TypographyFace } from '../../../constants/constants';

export const computeStyles = (props: Object) => {
  const {
   theme,
  } = props;

  const palette = paletteResolver(theme.get('palette'));
  const typo = theme.get('typography');

  return merge({
  }, {
    select: {
      base: {
        position: 'relative',
        ...typography.face(typo, TypographyFace.CONTENT),
      },
    },

    control: {
      base: {
        ...longhand('border', {
          width: 1,
          style: 'solid',
          spacing: 0,
          collapse: 'separate',
        }),
        cursor: 'default',
        display: 'table',
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      },

      disabled: {

        opacity: 0.3,
        cursor: 'not-allowed',
      },

      focusedNotOpen: {
        boxShadow: `
          0
          0
          6px
          ${palette.getIn([
            'control',
            'focusedNotOpen',
            'boxShadowColor',
          ])}
        `,
      },

      [Curvature.OFF]: {
        ...roundAllBorders(0),
      },

      [Curvature.WEAK]: {
        ...roundAllBorders(3),
      },

      [Curvature.STRONG]: {
        ...roundAllBorders(8),
      },

      open: {
        [Curvature.WEAK]: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        [Curvature.STRONG]: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },

    placeholder: {
      base: {
        ...typography.base,
        bottom: 0,
        left: 0,
        paddingTop: 6,
        ...cssSides('padding', Side.X, 10),
        position: 'absolute',
        right: 0,
        top: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },

    input: {
      base: {
        ...typography.base,
        ...cssSides('padding', Side.Y, 6),
        ...cssSides('padding', Side.X, 10),
        verticalAlign: 'middle',
      },

      disabled: {
        height: 38,
      },
    },

    inputElement: {
      base: {
        width: '100%',
        background: 'none transparent',
        ...longhand('border', {
          width: 0,
          style: 'none',
        }),
        boxShadow: 'none',
        cursor: 'default',
        display: 'inline-block',
        ...longhand('font', {
          family: 'inherit',
          size: 'inherit',
        }),
        ...cssSides('margin', Side.A, 0),
        outline: 'none',
        lineHeight: '14px',
      },
    },

    arrowZone: {
      base: {
        height: '100%',
        cursor: 'pointer',
        display: 'table-cell',
        position: 'relative',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 25,
        paddingRight: 5,
      },
    },

    arrow: {
      base: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 40,
        height: 40,
        ...longhand('margin', {
          top: -20,
          left: -20 + -8,
        }),
      },
    },

    value: {
      base: {
        ...typography.base,
        bottom: '0',
        left: '0',
        paddingTop: 6,
        ...cssSides('padding', Side.X, 10),
        position: 'absolute',
        right: '0',
        top: '0',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },

    menuOuter: {
      base: {
        ...longhand('border', {
          width: 1,
          style: 'solid',
          radius: 0,
        }),
        boxShadow: `0 1px 0 ${palette.getIn([
          'control',
          'menuOuter',
          'boxShadowColor',
        ])}`,
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '200px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: '1',
        WebkitOverflowScrolling: 'touch',
      },

      [Curvature.OFF]: {
        ...roundAllBorders(0),
      },

      [Curvature.WEAK]: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
      },

      [Curvature.STRONG]: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
    },

    option: {
      base: {
        ...typography.base,
        borderRadius: 0,
        ...cssSides('padding', Side.Y, 5),
        ...cssSides('padding', Side.X, 10),
      },

      selected: {
        fontWeight: 600,
      },

      focused: {
      },

      disabled: {
        opacity: 0.3,
      },
    },

    noresults: {
      base: {
        ...typography.base,
        borderRadius: 0,
        ...cssSides('padding', Side.Y, 5),
        ...cssSides('padding', Side.X, 10),
      },
    },
  }, palette.toJS());
};
