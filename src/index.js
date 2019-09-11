import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';

import Titles from './components/Titles'
import Form from './components/Form';
import LocalWeather from './components/LocalWeather';
import WeatherIcon from './components/WeatherIcon';

const API_KEY = "78da2c1f826a4d1f5015230c348bd398";
class App extends React.Component {
    getWeather = async (event) => {
        event.preventDefault();
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}&units=metric');
        const data = await api_call.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <ProjectHeader />

                <Titles />
                <Form 
                    getWeather={this.getWeather}
                />
                <LocalWeather />
                <WeatherIcon />
                
               <ProjectFooter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


