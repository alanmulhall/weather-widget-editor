import localstorage from '../utils/localStorageUtils';
import * as types from '../constants/actionTypes';

export const getDataFromLocalstorage = () => {
  const widgets = localstorage.get('widgets');
	return {
		type: types.GET_DATA_FROM_LOCALSTORAGE,
		data: {widgets}
	};
};

export const newWidget = widget => {
  const widgets = localstorage.get('widgets') || [];
  localstorage.set('widgets', widgets.concat(widget));
  return {
    type: types.NEW_WIDGET,
    data: widget
  };
};

