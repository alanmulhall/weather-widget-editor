import React from 'react';
import WidgetItem from '../widget-item/WidgetItem';

const WidgetList = ({widgets}) => {
  return (
    <div className="widget-list">
      {
        widgets && widgets.length > 0 && widgets.map(widget => <WidgetItem {...widget} key={widget.id} />)
      }
    </div>
  );
};

export default WidgetList;
