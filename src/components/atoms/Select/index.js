/*global require */
import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
import { Style } from 'radium';
import omit from 'lodash/omit';
import InlineSVG from 'svg-inline-react';
import { computeStyles } from './styles';
import { themePropType } from '../../../helpers/propTypes';

const arrow = require('./arrow.svg');

const renderArrow = (/*props: Object*/) => {
  return (
    <InlineSVG src={arrow}/>
  );
};

const Select = (props: Object) => {
  const selectProps = omit(props, [ 'theme' ]);
  const styles = computeStyles(props);

  return (
    <div>
      <Style
        scopeSelector=".Select"
        rules={{
          ...styles.select.base,
          '.Select-control': {
            ...styles.control.base,
            ...styles.control[props.theme.get('curvature')],
          },
          '.Select-placeholder': styles.placeholder.base,
          '.Select-input': styles.input.base,
          '.Select-input > input': styles.inputElement.base,
          // eslint-disable-next-line max-len
          '.is-focused:not(.is-open) > .Select-control': styles.control.focusedNotOpen,
          '.Select-value': styles.value.base,
          '.Select-menu-outer': {
            ...styles.menuOuter.base,
            ...styles.menuOuter[props.theme.get('curvature')],
          },
          '.Select-option': styles.option.base,
          '.Select-option.is-selected': styles.option.selected,
          '.Select-option.is-focused': styles.option.focused,
          '.Select-option.is-disabled': styles.option.disabled,
          '.Select-noresults': styles.noresults.base,
          '.Select-arrow-zone': styles.arrowZone.base,
          '.Select-arrow-zone > i': styles.arrow.base,
        }}
      />
      <Style
        scopeSelector=".Select.is-open"
        rules={{
          '.Select-control': {
            ...styles.control.open[props.theme.get('curvature')],
          },
        }}
      />
      <Style
        scopeSelector=".Select.is-disabled"
        rules={{
          ...styles.select.disabled,
          '.Select-control': styles.control.disabled,
          '.Select-input': styles.input.disabled,
        }}
      />
      <ReactSelect
        //arrowRenderer={renderArrow}
        {...selectProps}
      />
    </div>
  );
};

Select.displayName = 'Select';
Select.defaultProps = {
  clearable: false,
};
Select.propTypes = {
  clearable: PropTypes.bool,
  theme: themePropType(),
};

export default Select;
