import React from 'react';
import { Button, Kind } from '../Button';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { theme } from '../../../themes/testTheme';
import sinon from 'sinon';

describe('<Button />', function() {

  beforeEach(function() {
    this.commonProps = {
      theme: theme(),
      onClick: sinon.spy(),
    };
    this.kind = Kind.PRIMARY;
  });

  it('renders', function() {
    const wrapper = () => shallow(
      <Button
        {...this.commonProps}
        kind={this.kind}
      >
        <span className="foo"/>
      </Button>
    );

    expect(wrapper).to.not.throw;
  });

  it('renders a <button> by default', function() {
    const wrapper = shallow(
      <Button
        {...this.commonProps}
        kind={this.kind}
      >
        <span className="foo"/>
      </Button>
    );
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('renders children', function() {
    const wrapper = shallow(
      <Button
        {...this.commonProps}
        kind={this.kind}
      >
        <span className="foo"/>
      </Button>
    );
    expect(wrapper.find('span.foo')).to.have.length(1);
  });

  describe('Events', function () {
    it('calls the onClick function', function() {
      const wrapper = shallow(
        <Button
          {...this.commonProps}
          kind={this.kind}
        >
          <span className="foo"/>
        </Button>
      );

      wrapper.find('button').simulate('click');
      expect(this.commonProps.onClick).to.have.property('callCount', 1);
    });
  });
});
