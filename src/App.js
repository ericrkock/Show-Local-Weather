import React from "react";

//import Titles from "./components/Titles";
import ProjectHeader from './components/ProjectHeader';
import Form from "./components/Form";
import Button from './components/Button';
import Weather from "./components/Weather";
import ProjectFooter from './components/ProjectFooter';


const API_KEY = "78da2c1f826a4d1f5015230c348bd398";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: undefined,
      inputCountry: undefined,
      units: "c",
      buttonname: "ºF",
      city: undefined,
      country: undefined,
      weathericon: undefined,
      temperature: undefined,
      humidity: undefined,
      windspeed: undefined,
      description: undefined,
      error: undefined
    }
    this.handleCity = this.handleCity.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
  }

  handleCity(event) {
    this.setState({ inputCity: event.target.value });
  }

  handleCountry(event) {
    this.setState({ inputCountry: event.target.value });
  }

  getWeather = async () => {
    const city = this.state.inputCity;
    const country = this.state.inputCountry;
    const api_call_f = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const api_call_c = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data_f = await api_call_f.json();
    const data_c = await api_call_c.json();
    //console.log(data_c);
    if (this.state.units == "c") {
      if (city && country) {
        this.setState({
          city: data_c.name,
          country: data_c.sys.country,
          buttonname: "ºF",
          weathericon: "http://openweathermap.org/img/wn/" + data_c.weather[0].icon + "@2x.png",
          temperature: data_c.main.temp + " ºC",
          humidity: data_c.main.humidity + "%",
          windspeed: data_c.wind.speed + " meter/sec",
          description: data_c.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          inputCity: "",
          inputCountry: "",
          units: "c",
          buttonname: "ºC",
          city: undefined,
          country: undefined,
          weathericon: undefined,
          temperature: undefined,
          humidity: undefined,
          windspeed: undefined,
          description: undefined,
          error: "Please enter the values."
        });
      }
    } else {
      if (city && country) {
        this.setState({
          city: data_f.name,
          country: data_f.sys.country,
          buttonname: "ºC",
          weathericon: "http://openweathermap.org/img/wn/" + data_f.weather[0].icon + "@2x.png",
          temperature: data_f.main.temp + " ºF",
          humidity: data_f.main.humidity + "%",
          windspeed: data_f.wind.speed + " miles/hour",
          description: data_f.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          inputCity: "",
          inputCountry: "",
          units: "c",
          buttonname: "ºC",
          city: undefined,
          country: undefined,
          weathericon: undefined,
          temperature: undefined,
          humidity: undefined,
          windspeed: undefined,
          description: undefined,
          error: "Please enter the values."
        });
      }
    }
  }

  changeUnit = () => {
    if (this.state.units == "c") {
      this.setState({ units: "f" });
    } else {
      this.setState({ units: "c" });
    }
    this.getWeather();
  }

  resetInput = () => {
    this.setState({
      inputCity: "",
      inputCountry: "",
      units: "c",
      buttonname: "ºC",
      city: undefined,
      country: undefined,
      weathericon: undefined,
      temperature: undefined,
      humidity: undefined,
      windspeed: undefined,
      description: undefined,
      error: ""
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container">
                  <ProjectHeader />
                </div>
                <div className="col-xs-6 form-container">
                  <Form
                    inputCity={this.state.inputCity}
                    inputCountry={this.state.inputCountry}
                    handleCity={this.handleCity}
                    handleCountry={this.handleCountry}
                  />
                  <div className="buttonset">
                    <Button
                      name={"Get Weather"}
                      clicked={this.getWeather}
                    />
                    <Button
                      name={"Reset"}
                      clicked={this.resetInput}
                    />
                    <Button
                      name={this.state.buttonname}
                      clicked={this.changeUnit}
                    />
                  </div>
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    weathericon={this.state.weathericon}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    windspeed={this.state.windspeed}
                    description={this.state.description}
                    error={this.state.error}
                  />
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