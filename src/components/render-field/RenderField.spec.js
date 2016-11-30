import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import RenderField from './RenderField';

describe('<RenderField />', () => {
  context('props', () => {
    const props = {
      input: {name: 'title', value: ''},
      placeholder: 'enter a title',
      label: '',
      type: 'text',
      meta: {
        touched: false,
        error: 'Required'
      }
    };

    it('has the prop input defined', () => {
      const renderField = shallow(<RenderField {...props} />);
      expect(renderField.props.input).to.be.defined;
    });

    it('has the prop placeholder defined', () => {
      const renderField = shallow(<RenderField {...props} />);
      expect(renderField.props.placeholder).to.be.defined;
    });

    it('has the prop label defined', () => {
      const renderField = shallow(<RenderField {...props} />);
      expect(renderField.props.label).to.be.defined;
    });

    it('has the prop type defined', () => {
      const renderField = shallow(<RenderField {...props} />);
      expect(renderField.props.type).to.be.defined;
    });

    it('has the prop meta defined', () => {
      const renderField = shallow(<RenderField {...props} />);
      expect(renderField.props.meta).to.be.defined;
    });
  });
});
