import React from 'react';
import WeatherAppTitles from './WeatherAppTitles';

class Form extends React.Component {
   onFormSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.index);
    };
   render() {
      return (
         <div>
            <WeatherAppTitles />
            <form onSubmit={this.onFormSubmit}>
               <input 
                  type="text" 
                  name="city" 
                  value={this.props.inputCity} 
                  onChange={this.props.handleCity}
                  placeholder="City..." />
               <input 
                  type="text" 
                  name="country" 
                  value={this.props.inputCountry} 
                  onChange={this.props.handleCountry}
                  placeholder="Country..." />
            </form>
         </div>
      );
   }
}

export default Form;