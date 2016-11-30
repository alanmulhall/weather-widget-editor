import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Application from './containers/application/Application';
import './App.css';
import {getDataFromLocalstorage} from './actions/actionCreators';
import configureStore from './store/configureStore';

const store = configureStore();
//console.log('INITIAL STORE STATE', store.getState());
store.dispatch(getDataFromLocalstorage());
//console.log('AFTER LOCALSTORAGE STORE STATE', store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

export default App;
