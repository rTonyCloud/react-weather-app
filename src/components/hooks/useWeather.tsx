import { useEffect, useState } from 'react';

// images
import cloudIcon from '../../assets/cloud.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';
import drizzleIcon from '../../assets/drizzle.png';
import rainIcon from '../../assets/rain.png';
import snowIcon from '../../assets/snow.png';
import clearIcon from '../../assets/clear.png';
import nightIcon from '../../assets/night.png';


interface WeatherData {
  city: string;
  temp: number;
  humidity: number;
  wind: number;
  weather: string;
  country: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

const weatherIcons: {
  [key: string]: string;
  } = {
  clear: clearIcon,
  clouds: cloudIcon,
  snow: snowIcon,
  rain: rainIcon,
  drizzle: drizzleIcon,
  wind: windIcon,
  humidity: humidityIcon,
  night: nightIcon,
  default: cloudIcon,
};

const useWeather = () => {
  const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNight, setIsNight] = useState(false);

  // Get weather icon based on weather condition
    const getWeatherIcon = () => {
      if (isNight) {
        return weatherIcons.night; 
      } else {
        switch (weatherData?.weather) {
          case 'Clouds':
            return weatherIcons.cloud;
          case 'Rain':
            return weatherIcons.rain;
          case 'Snow':
            return weatherIcons.snow;
          case 'Drizzle':
            return weatherIcons.drizzle;
          default:
            return weatherIcons.clear;
        }
      }
    };

  useEffect(() => {
    if (city) {
      setIsLoading(true);
      const url = `${apiUrl}${city}&units=imperial&appid=${api_key}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setWeatherData({
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            weather: data.weather[0].description,
            country: data.sys.country,
            sys: {
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
            },
          });

          const currentTimestamp = Math.floor(Date.now() / 1000);
          setIsNight(
            currentTimestamp > data.sys.sunset || currentTimestamp < data.sys.sunrise
          );

          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [city]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return {
    city,
    setCity,
    weatherData,
    isLoading,
    handleSearch,
    weatherIcons,
    getWeatherIcon,
  };
};

export default useWeather;
