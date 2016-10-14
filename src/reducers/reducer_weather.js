// This reducer file just exports one anonymous function.
// That function is imported over in reducers/index.js, and
// is there given the name WeatherReducer. Cheers.

import { FETCH_WEATHER } from '../actions/index';

// Initial state: ARRAY (of cities searched)
// payload.data will be for ONE city (last searched)


export default function(state = [], action) {
  console.log("WR__ reduce_weather action", action);
  console.log("WR__ reduce_weather state", state);

  switch (action.type) {
    case FETCH_WEATHER:
    // ! NEVER SET STATE
    // Do not do:
    // return state.push(action.payload.data);
    // No.
    // Do not mutate state.
    // Instead, return an entirely new instance of state:
    // e.g. return state.concat([action.payload.data]);
    // ES6 even mo' better: (...spread operator)
      return [ action.payload.data,
                ...state ];
    // [city,city,city]   NOT: [city, [city, city]]
  }

  return state;
}

/*
action.payload.data
.city
.list
*/
