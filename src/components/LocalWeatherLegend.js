import React from 'react';

class LocalWeatherLegend extends React.Component {
   render() {
      return (
         <div className="local__info">
            {this.props.weathericon &&
               <p className="local__value">
               <img src={this.props.weathericon} alt="weather icon" />
               {this.props.description}</p>
            }
            {this.props.city && this.props.country && 
               <p className="local__key">Location: 
                  <span className="local__value">  {this.props.city} - {this.props.country}</span>
               </p>}
            {this.props.temperature && 
               <p className="local__key">Temperature: 
               <span className="local__value">  {this.props.temperature}</span>
               </p>}
            {this.props.humidity && 
               <p className="local__key">Humidity: 
                  <span className="local__value">  {this.props.humidity}</span>
               </p>}
            {this.props.windspeed && 
               <p className="local__key">Wind speed: 
                  <span className="local__value">  {this.props.windspeed}</span>
               </p>}
            {this.props.error && 
               <p>{this.props.error}</p>}
         </div>
      );
   }
}

export default LocalWeatherLegend;