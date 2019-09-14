import React from 'react';
import ProjectHeader from './ProjectHeader';

const API_KEY = "78da2c1f826a4d1f5015230c348bd398";

class LocalWeather extends React.Component {


   getLocalWeather = () => {
      const api_call_f = `http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}&units=imperial`;
      const data_f = api_call_f.json();
      console.log(data_f);
   }

   render() {
      return (
         <div>
            <ProjectHeader />
         </div>
      );
   }
}

export default LocalWeather;