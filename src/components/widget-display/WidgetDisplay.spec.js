import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import WidgetDisplay from './WidgetDisplay';

describe('<WidgetDisplay />', () => {
  context('props', () => {
    const props = {
      id: '13004963-008e-4d2d-aae6-55cb854ff79c',
      title: 'my first widget',
      unit: 'imperial',
      wind: false
    };

    it('has the prop id defined', () => {
      const widgetCode = shallow(<WidgetDisplay {...props} />);
      expect(widgetCode.props.id).to.be.defined;
    });

    it('has the prop title defined', () => {
      const widgetCode = shallow(<WidgetDisplay {...props} />);
      expect(widgetCode.props.title).to.be.defined;
    });

    it('has the prop unit defined', () => {
      const widgetCode = shallow(<WidgetDisplay {...props} />);
      expect(widgetCode.props.unit).to.be.defined;
    });

    it('has the prop wind defined', () => {
      const widgetCode = shallow(<WidgetDisplay {...props} />);
      expect(widgetCode.props.wind).to.be.defined;
    });
  });
});
