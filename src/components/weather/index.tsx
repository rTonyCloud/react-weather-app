// weather hook
import useWeather from '../hooks/useWeather.tsx';

//styling
import {
  Container,
  TopBar,
  Input,
  WeatherImage,
  WeatherTemp,
  WeatherLocation,
  DataContainer,
  Element,
  Data,
  Text,
  Icon,
} from './weatherStyles.tsx';

const WeatherApp: React.FC = () => {
  const { city, weatherIcons, weatherData, isLoading, handleSearch, getWeatherIcon } = useWeather();

  return (
    <Container>
      <TopBar>
        <Input
          type='text'
          className='cityInput'
          placeholder='search'
          value={city}
          onChange={handleSearch}
        />
      </TopBar>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <WeatherImage>
            {weatherData ? (
              <img
                src={getWeatherIcon()}
                alt={weatherData.weather}
              />
            ) : null}
          </WeatherImage>

          <WeatherTemp>{weatherData ? `${weatherData.temp}°F` : ''}</WeatherTemp>

          <WeatherLocation>
            {weatherData
              ? weatherData.city && weatherData.country
                ? `${weatherData.city}, ${weatherData.country}`
                : ''
              : ''}
          </WeatherLocation>

          <DataContainer>
            <Element>
              <Icon src={weatherIcons?.humidity} alt='' className='icon' />
              <Data>
                <div className='humidity-percent'>
                  {weatherData ? `${weatherData.humidity}%` : ''}
                </div>
                <Text>Humidity</Text>
              </Data>
            </Element>
            <Element>
              <Icon src={weatherIcons?.wind} alt='' className='icon' />
              <Data>
                <div className='humidity-percent'>
                  {weatherData ? `${weatherData.wind} mph` : ''}
                </div>
                <Text>Wind Speed</Text>
              </Data>
            </Element>
          </DataContainer>
        </>
      )}
    </Container>
  );
};

export default WeatherApp;
