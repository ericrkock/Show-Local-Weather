import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';

import Titles from './components/Titles'
import Form from './components/Form';
import LocalWeather from './components/LocalWeather';
import WeatherIcon from './components/WeatherIcon';

//const API_KEY = "78da2c1f826a4d1f5015230c348bd398";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const API_KEY = "78da2c1f826a4d1f5015230c348bd398";
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric');
        const data = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weater[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter City and Country"
            });
        };
    }

    render() {
        return (
            <div>
                <ProjectHeader />
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form
                                        getWeather={this.getWeather}
                                    />
                                    <LocalWeather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                    <WeatherIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProjectFooter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


