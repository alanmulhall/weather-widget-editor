import localstorage from '../utils/localStorageUtils';
import * as types from '../constants/actionTypes';
import uuid from 'uuid';
import shortid from 'shortid';

export const getDataFromLocalstorage = () => {
  const widgets = localstorage.get('widgets');
	return {
		type: types.GET_DATA_FROM_LOCALSTORAGE,
		data: {widgets}
	};
};

export const newWidget = widget => {
  const id = shortid.generate();
  const weatherWidgetId = uuid();
  const widgets = localstorage.get('widgets') || [];
  const newWidget = {...widget, weatherWidgetId, id};
  localstorage.set('widgets', [newWidget, ...widgets]);
  return {
    type: types.NEW_WIDGET,
    data: newWidget
  };
};

