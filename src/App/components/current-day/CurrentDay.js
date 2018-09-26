import React from 'react'
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import style from './CurrentDay.scss';
import cloudy from '../../../assets/cloudy.svg';
import rainy  from '../../../assets/rainy.svg';
import sunny from '../../../assets/sunny.svg';

const CurrentDay = (props) => {
    let imageToLoad = '';
    if(props.weather.includes('clear sky')) {
        imageToLoad = sunny;
    }
    if(props.weather.includes('clouds')){
        imageToLoad = cloudy;
    }
    if(props.weather.includes('rain')){
        imageToLoad = rainy;
    }
    return (
      <div className={style.container}>
          <div>
            <div className={style.title}>{props.city}</div>
            <img className={style.image} src={imageToLoad} />
          </div>
          <div className={style.metrics}>
              <div>Today:</div>
            <div>Low: {Math.floor(kelvinToFahrenheit(props.low))}</div>
            <div>High: {Math.floor(kelvinToFahrenheit(props.high))}</div>
            <div>Humidity: {props.humidity}</div>
          </div>
      </div>
    );
};

export default CurrentDay;