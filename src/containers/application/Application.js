import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header/Header';
import WidgetForm from '../widget-form/WidgetForm';
import WidgetList from '../../components/widget-list/WidgetList';
import './Application.css';

const propTypes = {
  dispatch: PropTypes.func.isRequired
}

class Application extends Component {
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

Application.propTypes = propTypes;

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Application);
