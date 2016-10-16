import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

// export default class WeatherList extends Component {
class WeatherList extends Component {

  /*
  { weather: [
      { city: { name: 'San Francisco' },
        list: [
          { main: { temp: 50, humidity: 40, pressure: 40 } }
        ]
      }
    ]
  }
  */

  renderWeather(cityData) {
    // This log works: 'Boston'
    console.log("WR__ weather_list RENDERWEATHER() cityData.city.name: ", cityData.city.name);

    const cityName = cityData.city.name;
    // ES5. Works. :)
    // const temps = cityData.list.map(
      // function (myArrayThing) {
      //   return myArrayThing.main.temp;
      // }

    // Works too. :)
    // const temps = cityData.list.map(
    //   (myArrayThing) => {
    //     return myArrayThing.main.temp;
    //   }

    // Works va bene ;)
    // const temps = cityData.list.map(
    //   (myArrayThing) => myArrayThing.main.temp
    // )

    // Works va bene ;)
    // const temps = cityData.list.map((weather) => weather.main.temp )

    const temps = cityData.list.map( weather => weather.main.temp )

    console.log("WR__ TEMPS! ", temps);

/*
But something breaking, would seem to be right here... ?
bundle.js:25650 Uncaught (in promise) TypeError: Cannot read property 'city' of undefined(…)

AH-HAH. (Oy.)
I misspelled mapStateToProps as MapStateToProps.
Oy!
*/

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City!</th>
            <th>Temperature!</th>
            <th>Pressure!</th>
            <th>Humidity!</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

/*
Hmm. state.weather is referring to what we set up in the /reducers/index.js combineReducers 'rooReducer', namely that 'weather:' (on left) would get the state returned by our WeatherReducer.
That is what the below function is plucking out of state: the 'state.weather', and it is mapping it to props for use here inside this component, also labelled (on the left side) as 'weather:'.
This is sort of saying, "Hey, I'm a component, and hey Mr. React/Redux/Connect whoever you are, when you invoke me, use me, get me going, run this here function of mine, which tells you (R/R/C) just what part of that big ol' application state I care about, and what I want to name/re-name it for my (component) purposes right here inside my component."
So here, this WeatherList component wants the state.weather. Very good.
*/
// ES5: (see below for ES6)
// function MapStateToProps(state) {
//   return { weather: state.weather };
// }

// ES6 bit:
// destructure {weather} off of state right in passed param:
function mapStateToProps({ weather }) {
  // The above does same as though you'd passed in 'state' then did a const like so:
  // const weather = state.weather

  // MORE ES6
  // return { weather: weather };
  return { weather };
}

/*
This call to connect()(), while exporting, is (I take it) where we holler out to React/Redux/Connect to make the above defined association/mapping.
This component wants the 'weather' off the state to be mapped onto the props for this component. Voila.
*/
export default connect(mapStateToProps)(WeatherList);
