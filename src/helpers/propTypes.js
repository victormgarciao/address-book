//@flow
import ImmutablePropTypes from 'react-immutable-proptypes';
import { PropTypes } from 'react';

export const themePropType = () => {
  return ImmutablePropTypes.mapContains({
    palette: ImmutablePropTypes.map.isRequired,
    typography: ImmutablePropTypes.map.isRequired,
    curvature: PropTypes.number.isRequired,
  });
};