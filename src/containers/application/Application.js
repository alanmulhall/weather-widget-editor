import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header/Header';
import WidgetForm from '../widget-form/WidgetForm';
import WidgetList from '../../components/widget-list/WidgetList';
import './Application.css';

class Application extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="widget-editor-container">
				<div className="widget-editor">
					<Header />
					<WidgetForm />
				</div>
        <WidgetList {...this.props} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Application);
