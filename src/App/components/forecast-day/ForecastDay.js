import React from 'react';
import style from './style.scss';


const ForecastDay = (props) => {
    return (
        <div className={style.container}>
            <div className={style.displayContainer}><span className={style.month}>{props.month}</span><span className={style.day}>{props.day}</span></div>
            <div><img className={style.image} src={props.image} /></div>
            <div className={style.displayContainer}><span>{props.low}</span><span>{props.high}</span></div>
        </div>
    );
}
export default ForecastDay;