// This reducer file just exports one anonymous function.
// That function is imported over in reducers/index.js, and
// is there given the name WeatherReducer. Cheers.
export default function(state = null, action) {
  console.log("WR__ reduce_weather action", action);
  console.log("WR__ reduce_weather state", state);
  return state;
}
