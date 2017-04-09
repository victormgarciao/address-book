//@flow
import px2Em from './px2Em';
import { TypographyFace } from '../constants/constants';
import longhand from '@team-griffin/css-longhand';

export const px2EmConfig = {
  format: 'rem',
  base: 16,
};

// breakpoints for react-matchmedia-connect that match bootstrap's
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colorAllBorders = (borderColor: String) => {
  return {
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
  };
};

export const roundAllBorders = (radius: Number) => {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
  };
};

const base = {
  ...longhand('font', {
    size: px2Em(16, px2EmConfig),
    weight: 400,
  }),
  lineHeight: px2Em(27, px2EmConfig),
};

export const typography = {
  base,

  h1: {
    ...base,
    fontSize: px2Em(26, px2EmConfig),
    lineHeight: px2Em(38, px2EmConfig),
    ...longhand('margin', {
      top: 10,
      bottom: 20,
      left: 0,
      right: 0,
    }),
  },

  text: {
    ...base,
  },

  face: (typo, face) => {
    return {
      fontFamily: typo.get(face),
    };
  },

  input: (typo) => {
    return {
      ...longhand('font', {
        size: px2Em(16, px2EmConfig),
        weight: 300,
        family: typo.get(TypographyFace.CONTENT),
      }),
      letterSpacing: 0.2,
      lineHeight: px2Em(22, px2EmConfig),
    };
  },
};

export const footerWidget = {
  base: {
    ...longhand('font', {
      size: px2Em(14, px2EmConfig),
      weight: 300,
    }),
    textAlign: 'center',
    lineHeight: px2Em(22, px2EmConfig),
  },
  large: {
    textAlign: 'left',
  },
};
