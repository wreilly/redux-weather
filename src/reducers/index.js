import { combineReducers } from 'redux';
// 'WeatherReducer' is just a name we give it here.
// fwiw, That is not any name created over in reducer_weather.js.
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  state: (state = {}) => state
});

export default rootReducer;
