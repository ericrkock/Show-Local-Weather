import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectFooter from './ProjectFooter';

class Form extends React.Component {
   render() {
      return (
         <div>
            <ProjectHeader />
            <form onSubmit={this.props.getWeather}>
               <input type="text" name="city" placeholder="City..."/>
               <input type="text" name="country" placeholder="Country..."/>
               <button>Get Weather</button>
            </form>
            <ProjectFooter />
         </div>
      );
   }
}

export default Form;