import React from 'react';
import style from './style.scss';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import cloudy from '../../../assets/cloudy.svg';
import rainy  from '../../../assets/rainy.svg';
import sunny from '../../../assets/sunny.svg';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const ForecastDay = (props) => {
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
            <div className={style.displayContainer}><span className={style.month}>{monthNames[props.date.getMonth()].substring(0, 3)}</span>
                <span className={style.day}>{props.date.getDate()}</span></div>
            <div><img className={style.image} src={imageToLoad} /></div>
            <div className={style.displayContainer}><span>{Math.floor(kelvinToFahrenheit(props.low))}</span><span>{Math.floor(kelvinToFahrenheit(props.high))}</span></div>
        </div>
    );
}
export default ForecastDay;