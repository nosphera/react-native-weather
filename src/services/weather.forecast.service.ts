import {ICity} from '../business/interfaces/iCity';
import {IPosition} from '../business/interfaces/iPosition';
import {
  REACT_APP_WEATHER_KEY,
  REACT_APP_WEATHER_KEY_CITIES,
} from 'react-native-dotenv';

const WeatherForecastService = {
  getForecast: (position: IPosition) => {
    debugger
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&lat=${position.latitude}&lon=${position.longitude}&appid=${REACT_APP_WEATHER_KEY}&units=metric&lang=pt_br`,
    )
      .then(response => response.json())
      .catch(error =>{
        debugger
         console.log('error', error)
      });
  },
  searchCities: (query: string) => {
    return fetch(
      `https://openweathermap.org/data/2.5/find?q=${query}&appid=${REACT_APP_WEATHER_KEY_CITIES}&lang=pt_br`,
    )
      .then(response => response.json())
      .then((data: any): ICity[] => {
        return data.list
          .map((c: any) => ({
            date: new Date(c.dt * 1000),
            name: c.name,
            country: c.sys.country,
            icon: c.weather[0].icon,
            position: {
              latitude: c.coord.lat,
              longitude: c.coord.lon,
            },
          }))
          .reduce((acc: any[], item: any) => {
            const index = acc.find(
              (i: ICity) => i.name === item.name && i.country === item.country,
            );
            if (!index) {
              acc.push(item);
            }
            return acc;
          }, []);
      })
      .catch(error => console.log('error', error));
  },
};

export default WeatherForecastService;
