import React from 'react';

const Weather = props => {

    const error = {
        color:'#D8000C'
    }

    return (
        <div className="weather-info">
            { 
                props.city && props.country && 
                <p className="weather__key">Location:
                    <span className="weather__value">{props.city}, {props.country}</span>
                </p> 
            }
            {
                props.temperature && 
                <p className="weather__key">Temperature: 
                    <span className="weather__value">{props.temperature}</span>
                </p>
            }
            {
                props.humidity && 
                <p className="weather__key">Humidity:
                    <span className="weather__value">{props.humidity}</span>
                </p>
            }
            {
                props.pressure && 
                <p className="weather__key">Pressure:
                    <span className="weather__value">{props.pressure}</span>
                </p>
            }
            {
                props.description && 
                <p className="weather__key">Conditions:
                    <span className="weather__value">{props.description}</span>
                </p>
            }
            {
                props.error && <p className="weather__error">{ props.error }</p>
            }
        </div>
    )
}

export default Weather;