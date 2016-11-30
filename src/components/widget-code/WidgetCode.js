import React, {PropTypes} from 'react';
import Highlight from 'react-highlight';
import codeSnippet from '../../utils/codeSnippet';
import './WidgetCode.css';

const propTypes = {
  weatherWidgetId: PropTypes.string,
  title: PropTypes.string,
  unit: PropTypes.string,
  wind: PropTypes.bool
}

const WidgetCode = ({weatherWidgetId, title, unit, wind}) => {
	const code = codeSnippet(weatherWidgetId, title, unit, wind);
  return (
    <div className="widget-code">
      <Highlight className='javascript'>
        {code}
      </Highlight>
    </div>
  );
};

WidgetCode.propTypes = propTypes;

export default WidgetCode;
