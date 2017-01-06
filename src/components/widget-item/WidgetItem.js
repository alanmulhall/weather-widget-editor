import React from 'react';
import WidgetCode from '../widget-code/WidgetCode';
import WidgetDisplay from '../widget-display/WidgetDisplay';
import './WidgetItem.css';

const WidgetItem = (props) => {
  return (
    <div className="widget-item">
      <WidgetDisplay {...props} />
      <WidgetCode {...props} />
    </div>
  );
};

export default WidgetItem;
