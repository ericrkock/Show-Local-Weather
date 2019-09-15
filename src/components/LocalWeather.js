import React from 'react';
import axios from 'axios';
import ProjectHeader from './ProjectHeader';
import WeatherAppButton from './WeatherAppButton';
import LocalWeatherLegend from './LocalWeatherLegend';

const API_KEY = '78da2c1f826a4d1f5015230c348bd398';

class LocalWeather extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         city: undefined,
         country: undefined,
         units: "c",
         buttonname: "ºC",
         weathericon: undefined,
         temperature: undefined,
         humiditity: undefined,
         windspeed: undefined,
         description: undefined,
         error: undefined
      }
   }
  
   componentDidMount() {
      this.getWeather();
   }

   // Make sure we have access to users location
   getWeather = () => {
      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(this.successWeather, this.errorWeather);
      }
   }

   // Get location coordinates
   successWeather = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const url_c = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      const url_f = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

      if (this.state.units === "c") {
         axios.get(url_c).then((res) => {
            const data = res.data;
            this.setState({ 
               city: data.name,
               country: data.sys.country,
               buttonname: "ºF",
               weathericon: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
               temperature: data.main.temp + " ºC",
               humidity: data.main.humidity + "%",
               windspeed: data.wind.speed + " meter/sec",
               description: data.weather[0].description,
            });
         });
      } else {
         axios.get(url_f).then((res) => {
            const data = res.data;
            this.setState({ 
               city: data.name,
               country: data.sys.country,
               weathericon: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
               buttonname: "ºC",
               temperature: data.main.temp + " ºF",
               humidity: data.main.humidity + " %",
               windspeed: data.wind.speed + " miles/hour",
               description: data.weather[0].description,
            });
         });
      };
   }
  
   changeUnit = () => {
      if (this.state.units == "c") {
         this.setState({ units: "f" });
      } else {
         this.setState({ units: "c" });
      }
      this.getWeather();
   }

   errorWeather = (er) => {
      alert("We could not determine your location");
      console.log(er);
      this.setState({
         city: undefined,
         country: undefined,
         units: "c",
         buttonname: "ºC",
         weathericon: undefined,
         temperature: undefined,
         humidity: undefined,
         windspeed: undefined,
         description: undefined,
         error: undefined
      });
   }
  
   render() {
      return (
         <div>
            <ProjectHeader />
            <div className="buttonset">
               <WeatherAppButton 
                  name={"Check Again"}
                  clicked={this.getWeather}
               />
               <WeatherAppButton 
                  name={this.state.buttonname}
                  clicked={this.changeUnit}
               />
            </div>
            <LocalWeatherLegend 
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
      );
   }
}

export default LocalWeather;