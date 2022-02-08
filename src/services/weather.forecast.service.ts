import {ICity} from '../business/interfaces/iCity';
import {IPosition} from '../business/interfaces/iPosition';
const API_KEY: string = '35b3694a7b669ff0a61ccf893bf14b22';
const WeatherForecastService = {
  getForecast: (position: IPosition) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  },
  searchCities: (query: string) => {
    return fetch(
      `https://openweathermap.org/data/2.5/find?q=${query}&appid=439d4b804bc8187953eb36d2a8c26a02&lang=pt_br`,
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
