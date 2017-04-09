import React from 'react';
import Input, { Status } from '../Input';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { theme } from '../../../themes/testTheme';
import sinon from 'sinon';

describe('<Input />', function() {
  beforeEach(function() {
    this.theme = theme();
  });

  it('should render a text input by default', function() {
    const wrapper = shallow(
      <Input
        theme={this.theme}
      />
    );

    expect(wrapper.find('input[type="text"]')).to.have.length(1);
  });

  describe('::Events', function() {
    it('should fire onchange event', function() {
      const testFunc = sinon.spy();
      const wrapper = shallow(
        <Input
          theme={this.theme}
          onChange={testFunc}
        />
      );

      wrapper.find('input').simulate('change');

      expect(testFunc.calledOnce).to.be.true;
    });
  });

  describe('::Palette Styles', function() {

    describe('Input states', function() {
      it('should add error styles when Status is error', function() {
        const wrapper = shallow(
          <Input
            theme={this.theme}
            status={Status.ERROR}
          />
        );

        expect(wrapper.find('input').prop('style').borderColor)
          .to.equal(this.theme.get('palette').get('red01'));
      });

      it('should add disabled styles when inactive', function() {
        const wrapper = shallow(
          <Input
            theme={this.theme}
            disabled={true}
          />
        );

        expect(wrapper.find('input').prop('style').backgroundColor)
          .to.equal(this.theme.get('palette').get('grey11'));
      });

    });
  });
});
