const codeSnippet = (weatherWidgetId, title, unit, wind) => {
	const code = `
    <link rel="stylesheet" href="http://weather-widget-alan.s3-us-west-1.amazonaws.com/stylesheets/weather-icons.css">
    <div id="${weatherWidgetId}"></div>
    <script>(function(d, s, id) {
      var js, wjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.onload = function() {
        var widget = new WeatherWidget.default({title: '${title}', units: '${unit}', showWind: ${wind}});
        widget.then(function(data) {
          var host = document.getElementById('${weatherWidgetId}').createShadowRoot();
          host.innerHTML = data;
        });
      }
      js.src = "http://weather-widget-alan.s3-us-west-1.amazonaws.com/javascripts/dist/weather-widget.js";
      wjs.parentNode.insertBefore(js, wjs);
    }(document, 'script', 'weather-widget-sdk'));</script>

	`;
  return code;
};

export default codeSnippet;
