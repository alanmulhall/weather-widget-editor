import React, {Component, PropTypes} from 'react';
import './WidgetDisplay.css';

class WidgetDisplay extends Component {
	static propTypes = {
    weatherWidgetId: PropTypes.string,
    title: PropTypes.string,
    unit: PropTypes.string,
    wind: PropTypes.bool
	}

	constructor(props) {
		super(props);
		const {weatherWidgetId, title, unit, wind} = props;
		this.weatherWidgetId = weatherWidgetId;
		this.title = title;
		this.unit = unit;
		this.wind = wind;
	}
	componentDidMount() {
		const code = `
			(() => {
				const widget = new WeatherWidget.default({title: '${this.title}', units: '${this.unit}', showWind: ${this.wind}});
				widget.then(data => {
					let host = document.getElementById('${this.weatherWidgetId}').createShadowRoot();
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
				<div id={this.weatherWidgetId}></div>
			</div>
		);
	}
};

export default WidgetDisplay;
