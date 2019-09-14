import React from 'react';



class Weather extends React.Component {
   
   render() {
      return (
         <div className="weather__info">
            {this.props.weathericon &&
               <p className="weather__value">
               <img src={this.props.weathericon} alt="weather icon" />
               {this.props.description}</p>
            }
            {this.props.city && this.props.country && 
               <p className="weather__key">Location: 
                  <span className="weather__value">  {this.props.city} - {this.props.country}</span>
               </p>}
            {this.props.temperature && 
               <p className="weather__key">Temperature: 
               <span className="weather__value">  {this.props.temperature}</span>
               </p>}
            {this.props.humidity && 
               <p className="weather__key">Humidity: 
                  <span className="weather__value">  {this.props.humidity}</span>
               </p>}
            {this.props.windspeed && 
               <p className="weather__key">Wind speed: 
                  <span className="weather__value">  {this.props.windspeed}</span>
               </p>}
            {this.props.error && 
               <p>{this.props.error}</p>}
         </div>
      );
   }
}

export default Weather;