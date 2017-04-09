import React from 'react';
import Label  from '../Label';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { theme } from '../../../themes/testTheme';

describe('<Label />', function() {
  beforeEach(function() {
    this.theme = theme();
  });

  it('renders the label', function() {
    const wrapper = () => shallow(
      <Label
        theme={ this.theme }
        required={false}
      >
        foo Label
      </Label>
    );

    expect(wrapper).to.not.throw;
  });

  it(' doesnt renders optional on default', function() {
    const wrapper = mount(
      <Label
        theme={ this.theme }
      >
        foo Label
      </Label>
    );

    expect(wrapper.find('.Label__optional')).to.have.length(0);
  });

  it('renders the correct text label', function() {
    const labelText = 'Foo Label';
    const wrapper = mount(
      <Label
        theme={ this.theme }
      >
        { labelText }
      </Label>
    );

    const label = wrapper.find('label');

    expect(label.text()).to.contain('Foo Label');
  });

});
