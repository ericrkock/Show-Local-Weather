import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Button from './components/Button';
import Weather from "./components/Weather";
import ProjectFooter from './components/ProjectFooter';


const API_KEY = "78da2c1f826a4d1f5015230c348bd398";

class App extends React.Component {
  state = {
    inputCity: "",
    inputCountry: "",
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        inputCity: "",
        inputCountry: "",
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  resetImput = () => {
    this.setState({
      inputCity: "",
      inputCountry: "",
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <div>
                    <Form
                      inputCity={this.state.inputCity}
                      inputCountry={this.state.inputCountry}
                      getWeather={this.getWeather}
                    />
                    <Button
                      name="Get Weather"
                      clicked={this.getWeather}
                    />
                    <Button
                      name="Reset"
                      clicked={this.resetInput}
                    />
                  </div>
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <ProjectFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;