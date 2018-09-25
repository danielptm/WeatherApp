import React, { Component } from 'react';
import styles from './App.scss';
import ForecastDay from './components/forecast-day/ForecastDay';
import cloudy from '../assets/cloudy.svg';
import rainy  from '../assets/rainy.svg';
import sunny from '../assets/sunny.svg';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>

          <div className={styles.dayContainer}>
            <div className={styles.dayContainer}>
              <ForecastDay
                month={'Sept'}
                day={'25'}
                image={sunny}
                high={'85'}
                low={'55'}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
