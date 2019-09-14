import React from 'react';
import ProjectHeader from './ProjectHeader';


class Form extends React.Component {
   render() {
      return (
         <div>
            <ProjectHeader />
            <div onSubmit={this.props.getWeather}>
               <input type="text" name="city" value={this.props.inputCity} placeholder="City..." />
               <input type="text" name="country" value={this.props.inputCountry} placeholder="Country..." />
            </div>
         </div>
      );
   }
}

export default Form;