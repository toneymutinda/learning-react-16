import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "f94781851a34e9ee9375058e6049e617";

//Initialize Component
class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault(); //prevent page from reloading
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        error: undefined,
      })
    }
    else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        pressure: undefined,
        description: undefined,
        error: "Please ensure that you have entered the values",
      })
    }
  }

  render () {
    return (
      <div>
          <div className="wrapper">
              <div className="main">
                  <div className="container">
                      <div className="row">
                         <div className="col-xs-5 title-container">
                          <Titles />
                         </div> 
                         <div className="col-xs-7 form-container">
                          <Form getWeather={this.getWeather} />
                          <Weather 
                            city={this.state.city}
                            country={this.state.country}
                            temperature={this.state.temperature}
                            humidity={this.state.humidity}
                            pressure={this.state.pressure}
                            description={this.state.description}
                            error={this.state.error}
                          />
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default App;

