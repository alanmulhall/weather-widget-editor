import React from 'react';
import WidgetCode from '../widget-code/WidgetCode';
import WidgetDisplay from '../widget-display/WidgetDisplay';
import uuid from 'uuid';
import './WidgetItem.css';

const WidgetItem = (props) => {
  const weatherWidgetId = uuid();
  return (
    <div className="widget-item">
      <WidgetDisplay {...props} weatherWidgetId={weatherWidgetId} />
      <WidgetCode {...props} weatherWidgetId={weatherWidgetId} />
    </div>
  );
};

export default WidgetItem;
