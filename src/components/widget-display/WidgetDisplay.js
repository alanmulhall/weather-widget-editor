import React, {Component, PropTypes} from 'react';
import './WidgetDisplay.css';

class WidgetDisplay extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    unit: PropTypes.string,
    wind: PropTypes.bool
  }

	constructor(props) {
		super(props);
		const {id, title, unit, wind} = props;
		this.id = id;
		this.title = title;
		this.unit = unit;
		this.wind = wind;
	}
	componentDidMount() {
		const code = `
			(() => {
				const widget = new WeatherWidget.default({title: '${this.title}', units: '${this.unit}', showWind: ${this.wind}});
				widget.then(data => {
					let host = document.getElementById('${this.id}').createShadowRoot();
					host.innerHTML = data;
				});
			})()
		`;
		var script = document.createElement("script");
		script.innerHTML = code;
		document.head.appendChild(script);
	}

	render() {
		return (
			<div className="widget-display">
				<div id={this.id}></div>
			</div>
		);
	}
};

export default WidgetDisplay;
