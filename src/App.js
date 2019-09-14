import React from "react";

import LocalWeather from './components/LocalWeather';
import WeatherApp from './components/WeatherApp';
import ProjectFooter from './components/ProjectFooter';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container">
                  <LocalWeather />
                </div>
                <div className="col-xs-6 form-container">
                  <WeatherApp />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectFooter />
      </div>
    );
  }
};

export default App;