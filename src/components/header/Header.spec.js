import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import {expect} from 'chai';

describe('<Header />', () => {
  it('has a header class', () => {
    const header = shallow(<Header />);
    expect(header.find('.header')).to.have.length(1);
  });

  it('has the correct title', () => {
    const header = shallow(<Header />);
    expect(header.contains('Weather Widget')).to.equal(true);
  });
});
