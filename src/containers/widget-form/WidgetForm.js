import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from '../../components/render-field/RenderField';
import validate from '../../utils/validate';
import {newWidget} from '../../actions/actionCreators';
import './WidgetForm.css';

class WidgetForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    pristine: PropTypes.bool
  }

	componentDidMount() {
		const initData = {
			unit: 'imperial',
			wind: false
		};
		return this.props.initialize(initData);
	}

	handleSubmit = (e) => {
		const {dispatch, reset} = this.props;
		dispatch(newWidget(e));
    reset();
	}

	render() {
		const {handleSubmit, submitting, pristine} = this.props;
		return (
			<form className="widget-form" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
				<Field name="title" type="text" component={RenderField} label="" placeholder="enter a title" />
				<label>which unit of measurement would you like?</label>
				<Field name="unit" component="select">
					<option value="imperial">Imperial</option>
					<option value="metric">Metric</option>
				</Field>
				<Field name="wind" type="checkbox" component={RenderField} label="would you like to display wind information?" />
				<div>
					<button className="create" type="submit" disabled={pristine || submitting}>create</button>
				</div>
			</form>
		);
	}
};

export default reduxForm({
  form: 'widget',
	validate
})(WidgetForm);

