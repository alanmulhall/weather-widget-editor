import localstorage from '../utils/localStorageUtils';
import * as types from '../constants/actionTypes';
import cuid from 'cuid';

export const getDataFromLocalstorage = () => {
  const widgets = localstorage.get('widgets');
	return {
		type: types.GET_DATA_FROM_LOCALSTORAGE,
		data: {widgets}
	};
};

export const newWidget = widget => {
  const id = cuid();
  const widgets = localstorage.get('widgets') || [];
  const newWidget = {...widget, id};
  localstorage.set('widgets', [newWidget, ...widgets]);
  return {
    type: types.NEW_WIDGET,
    data: newWidget
  };
};

