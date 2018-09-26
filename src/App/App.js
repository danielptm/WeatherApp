import React, { Component } from 'react';
import styles from './App.scss';
import ForecastDay from './components/forecast-day/ForecastDay';
import axios from 'axios';
import CurrentDay from "./components/current-day/CurrentDay";


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
          city: '',
          weatherObjectsToDisplay: []
      };
      setTimeout(() => {
        console.log(this.state);
      }, 2000)
  }

  componentDidMount(){
      axios.get('http://api.openweathermap.org/data/2.5/forecast?id=5746545&APPID=61e861252e9716edc7d78ec9dbfac8ff')
          .then((res) => {
              this.state.city = res.data.city.name;
              console.log(res);
              res.data.list.forEach((item, index) => {
                  const weatherObject = {};
                  weatherObject.humidity = item.main.humidity;
                  weatherObject.temp_min = item.main.temp_min;
                  weatherObject.temp_max = item.main.temp_max;
                  weatherObject.weather = item.weather[0].description;
                  weatherObject.dt_txt = item.dt_txt;
                  if(index === 0){
                      this.setState((state, props) => ({weatherObjectsToDisplay: [...state.weatherObjectsToDisplay, weatherObject]}));
                  }
                  if(weatherObject.dt_txt.includes('12:00') && this.state.weatherObjectsToDisplay.length < 5) {
                      this.setState((state, props) =>({weatherObjectsToDisplay: [...state.weatherObjectsToDisplay, weatherObject]}));
                  }
              });
          })
  }

  render() {
    return (
      <div className={styles.container}>
          { this.state.weatherObjectsToDisplay.length > 0 ?
              <CurrentDay
                city={this.state.city}
                humidity={this.state.weatherObjectsToDisplay[0].humidity}
                weather={this.state.weatherObjectsToDisplay[0].weather}
                high={this.state.weatherObjectsToDisplay[0].temp_max}
                low={this.state.weatherObjectsToDisplay[0].temp_min}
            />
              : null }
            <div className={styles.dayContainer}>
              {this.state.weatherObjectsToDisplay.map((obj) => {
                return <ForecastDay
                          date={new Date(obj.dt_txt)}
                          weather={obj.weather}
                          high={obj.temp_max}
                          low={obj.temp_min}
                        />
              })}
            </div>
      </div>
    );
  }
}

export default App;
