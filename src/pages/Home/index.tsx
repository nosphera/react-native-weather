import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {useEffect, useState} from 'react';
import HomeComponent from './component';
import {IPosition} from '../../business/interfaces/iPosition';
import WeatherForecastService from '../../services/weather.forecast.service';

const Home: React.FC<any> = () => {
  Geocoder.init('AIzaSyD8_t0WOYfNGsafN52bQ4WaM5yQOQpwESE');
  const [errorMsg, setErrorMsg] = useState();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [getForecast, setGetForecast] = useState(false);
  const [address, setAddress] = useState<any>(null);
  const [position, setPosition] = useState<IPosition>({
    latitude: -27.5924206,
    longitude: -48.5606079,
    latitudeDelta: 0.922,
    longitudeDelta: 0.421,
  });

  const [cities, setCities] = useState(null);
  const [pooler, setPooler] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      (locat: any) => {
        setGetForecast(true);
        setPosition({
          ...position,
          latitude: locat.coords.latitude,
          longitude: locat.coords.longitude,
        });
      },
      (error: any) => {
        setErrorMsg('Não foi possível obter a localização');
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        showLocationDialog: true,
      },
    );
  };

  const handleSearch = (qr: string) => {
    clearTimeout(pooler);
    const pool = setTimeout(() => {
      debugger;
      WeatherForecastService.searchCities(qr).then((data: any) => {
        console.log(data);
        setCities(data);
      });
    }, 1000);
    setPooler(pool);
  };

  useEffect(() => {
    requestMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then(
      statuses => {
        let result = false;
        const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];

        if (statusFine == 'granted') {
          result = true;
        } else {
          setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
        }

        if (result) {
          getData();
        }
      },
    );
  }, []);

  useEffect(() => {
    if (getForecast) {
      WeatherForecastService.getForecast(position).then((data: any) => {
        setWeatherData(data);
        setLoading(false);
      });
      Geocoder.from(position.latitude, position.longitude)
        .then(json => {
          var addressComponent = {
            formatted_address: json?.results[0]?.formatted_address,
            number: json?.results[0]?.address_components[0]?.short_name,
            street: json?.results[0]?.address_components[1]?.short_name,
            neighborhood: json?.results[0]?.address_components[2]?.short_name,
            city: json?.results[0]?.address_components[3]?.short_name,
            state: json?.results[0]?.address_components[4]?.short_name,
            country: json?.results[0]?.address_components[5]?.short_name,
            zip: json?.results[0]?.address_components[6]?.short_name,
          };
          setAddress(addressComponent);
        })
        .catch(error => console.warn(error));
    }
  }, [position, getForecast]);

  return (
    <HomeComponent
      handleSearch={(query: string) => handleSearch(query)}
      refresh={() => {
        getData();
      }}
      cities={cities}
      setPosition={(p: IPosition) => {
        setPosition(p);
        setCities(null);
      }}
      {...{position, weatherData, address, loading}}
    />
  );
};

export default Home;
