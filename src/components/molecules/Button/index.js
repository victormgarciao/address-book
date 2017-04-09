// @flow
import React, { PropTypes, Component, createElement } from 'react';
import toArray from 'lodash/toArray';
import radium from 'radium';
import { typography, px2EmConfig, roundAllBorders } from '../../../helpers/css';
import px2Em from '../../../helpers/px2Em';
import get from 'lodash/get';
import { Curvature, TypographyFace } from '../../../constants/constants';
import { themePropType } from '../../../helpers/propTypes';

export const Kind = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  TERTIARY: 'TERTIARY',
  DETRIMENTAL: 'DETRIMENTAL',
  POSITIVE: 'POSITIVE',
};

export class Button extends Component {
  static defaultProps = {
    component: 'button',
    type: 'button',
    disabled: false,
    block: false,
  }

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    component: PropTypes.string,
    kind: PropTypes.oneOf(toArray(Kind)).isRequired,
    style: PropTypes.object,
    children: PropTypes.element.isRequired,
    theme: themePropType(),
    /* eslint-enable react/no-unused-prop-types */
  }

  computeStyles() {
    const {
      theme,
      style,
    } = this.props;

    const palette = theme.get('palette');

    return {
      root: {
        base: {
          ...typography.text,
          ...typography.face(theme.get('typography'), TypographyFace.CONTENT),
          'overflow': 'hidden',
          'fontSize': px2Em(14, px2EmConfig),
          'outline': 0,
          'position': 'relative',
          'textTransform': 'uppercase',
          'fontWeight': 600,
          'display': 'inline-block',
          'paddingTop': 3,
          'paddingRight': 20,
          'paddingBottom': 5,
          'paddingLeft': 20,
          'textAlign': 'center',
          'borderColor': 'transparent',
          'borderStyle': 'solid',
          'borderWidth': 1,
          'margin': 0,
          'cursor': 'pointer',
          'transition': 'opacity 0.2s ease-in-out',
          // States have to be here to enable hover
          ':hover': {
            textDecoration: 'none',
          },
          ':focus': {
          },
          ':active': {
          },
        },

        disabled: {
          cursor: 'not-allowed',
          opacity: 0.3,
          ...get(style, 'root.disabled'),
        },

        block: {
          display: 'block',
          width: '100%',
        },

        [Kind.PRIMARY]: {
          backgroundColor: palette.get('primary'),
          color: palette.get('contrast'),
        },

        [Kind.SECONDARY]: {
          backgroundColor: palette.get('grey09'),
          color: palette.get('grey04'),
        },

        [Kind.TERTIARY]: {
          backgroundColor: '#fff',
          color: palette.get('grey04'),
          borderColor: palette.get('grey10'),
        },

        [Kind.DETRIMENTAL]: {
          backgroundColor: '#d94040',
          color: '#fff',
        },

        [Kind.POSITIVE]: {
          backgroundColor: '#7fa800',
          color: '#fff',
        },

        [Curvature.OFF]: {
          ...roundAllBorders(0),
        },

        [Curvature.WEAK]: {
          ...roundAllBorders(4),
        },

        [Curvature.STRONG]: {
          ...roundAllBorders(20),
        },
      },


      glass: {
        base: {
          position: 'absolute',
          // This is minus 1 to ensure
          // that the glass overlaps the
          // borders
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          opacity: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          transition: 'opacity 250ms ease-in-out',
        },

        hover: {
          opacity: 1,
        },

        focus: {
          opacity: 1,
        },

        active: {
          opacity: 1,
        },

        [Kind.TERTIARY]: {
          backgroundColor: palette.get('grey12'),
        },
      },
    };
  }

  render() {
    const props = this.props;
    const {
      component,
      kind,
      theme,
      block,
      children,
      type,
      ...buttonProps
    } = props;

    const styles = this.computeStyles(props);

    const isDisabled = (buttonProps.disabled === true);
    const isHover = radium.getState(this.state, 'button', ':hover');
    const isFocus = radium.getState(this.state, 'button', ':focus');
    const isActive = radium.getState(this.state, 'button', ':active');

    return createElement(component, {
      ...buttonProps,
      ...(component === 'button') && {
        type,
      },
      key: 'button',
      style: [
        styles.root.base,
        styles.root[kind],
        styles.root[theme.get('curvature')],
        (isDisabled === true) && styles.root.disabled,
        (block === true) && styles.root.block,
      ],
    },
    (
      <span>
        <span
          key="glass"
          style={[
            styles.glass.base,
            (isHover === true && isDisabled === false) && styles.glass.hover,
            (isFocus === true && isDisabled === false) && styles.glass.focus,
            (isActive === true && isDisabled === false) && styles.glass.active,
            styles.glass[kind],
          ]}
        />
        <span style={{
          position: 'relative',
        }}
        >
          {children}
        </span>
      </span>
    ));
  }
}

export default radium(Button);
