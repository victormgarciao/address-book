import { Map } from 'immutable';

export const theme = () => {
  return Map({
    palette: Map({
      headerBackground: '#fff',
      headerForeground: '#0091d3',

      primary: '#0091d3',
      secondary: '#0091d3',
      tertiary: '#0091d3',

      contrast: '#fff',

      grey01: '#1a1a1a',
      grey02: '#282828',
      grey03: '#333',
      grey04: '#484848',
      grey05: '#666',
      grey06: '#848484',
      grey07: '#909090',
      grey08: '#999',
      grey09: '#ccc',
      grey10: '#eee',
      grey11: '#f2f2f2',
      grey12: '#f7f7f7',

      red01: '#cc0000',
      red02: '#f4c7c7',

      yellow01: '#EDD000',
      yellow02: '#FAF1B2',

      green01: '#7FA800',
      green02: '#D8E5B2',
    }),

    typography: Map({
      content: 'Arial, sans-serif',
      display: 'Arial Black, sans-serif',

      contentURL: 'https://fonts.googleapis.com/css?family=Open+Sans',
      displayURL: 'https://fonts.googleapis.com/css?family=Raleway',
    }),

    /* Curvature
      0: 'Off',
      1: 'Weak',
      2: 'Strong',
    */
    curvature: 0,
  });
};
