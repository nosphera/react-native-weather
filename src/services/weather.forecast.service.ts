import {IPosition} from '../business/interfaces/iPosition';
const API_KEY: string = '35b3694a7b669ff0a61ccf893bf14b22';
const WeatherForecastService = {
  getForecast: (position: IPosition) => {
    const requestOptions = {
      method: 'GET',
    };

    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`,
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  },
};

export default WeatherForecastService;
