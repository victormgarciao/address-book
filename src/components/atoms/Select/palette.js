import hexRgb from 'hex-rgb';
import { fromJS } from 'immutable';

export const paletteResolver = (theme: Object) => {

  const primaryRGB = hexRgb(theme.get('primary'));
  const primaryJoint = primaryRGB.join(', ');

  return fromJS({
    control: {
      base: {
        backgroundColor: '#fff',
        borderColor: '#d6d6d6',
        color: '#333',
      },

      focusedNotOpen: {
        borderColor: `rgba(${primaryJoint}, 0.25)`,
        boxShadowColor: `rgba(${primaryJoint}, 0.25)`,
      },

      disabled: {
        backgroundColor: theme.get('grey10'),
      },
    },

    option: {
      base: {
        color: theme.get('grey04'),
      },

      selected: {
        backgroundColor: `rgba(${primaryJoint}, 0.08)`,
      },

      focused: {
        backgroundColor: `rgba(${primaryJoint}, 0.04)`,
      },

      disabled: {
        backgroundColor: `rgba(${primaryJoint}, 0.03)`,
      },
    },

    placeholder: {
      base: {
        color: '#aaa',
      },
    },

    value: {
      base: {
        color: '#666',
      },
    },

    menuOuter: {
      base: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderTopColor: '#e6e6e6',
        // This needs to be set manually (embedded into box shadow)
        boxShadowColor: 'rgba(0, 0, 0, 0.06)',
      },
    },

    noresults: {
      base: {
        color: theme.get('grey04'),
      },
    },
  });
};
