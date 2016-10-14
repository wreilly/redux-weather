import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Yes. Working. :o)
console.log("WR__ 00  src/containers/search_bar.js process.env.OPENWEATHER_API_KEY: ", process.env.OPENWEATHER_API_KEY);

// export default class SearchBar extends Component {
class SearchBar extends Component {



  // Component state (not redux state)
  constructor(props) {
    super(props);

    this.state = { term: '' }; // search term, to begin

    /* BIND BIZ
    'Splainin': 8:30~
    RIGHT-HAND SIDE:
    - 'this' on right is this component, SearchBar.
    - SearchBar has a function/method 'onInputChange', so: 'this.onInputChange'
    - Next we "bind" that ('this.onInputChange') to the 'this' (to the SearchBar component).
    - I think that means, once bound, when we see 'this', 'this' is going to be taken to mean that thing I bound the function 'onInputChange' to, in this case namely, the component SearchBar. Won't be taken to mean anything else (e.g. some other 'this' like global or god knows what). Ok.
    LEFT-HAND SIDE:
    - Ok, so the whole thing you prepared on the right-hand side (a bound function called onInputChange) ...
    - ... is now to be assigned to a whole thing called 'this.onInputChange'
    - We are sort of overriding the original straightforward 'this.onInputChange' (which you can also see over there on the right-hand side, yes??) (and which was causing us trouble with the 'this' handling, yes??) -- we are overriding that original construct with this new one, from the right-hand side, which is the New & Improved 'this.onInputChange' namely because it (the function 'onInputChange') is/has been "bound" to the 'this' which is the parent component SearchBar.
    - Now we won't get wrong interpretation of 'this' when we invoke 'this.onInputChange'.
    - The code will know it is the SearchBar's 'onInputChange'.
    - phew.
    */
    this.onInputChange = this.onInputChange.bind(this);

// undle.js:23953 Uncaught TypeError: Cannot read property 'props' of null
// That is, we needed to add this line:
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }


/* ****** BINDING & ETC. ******* */
// See above in constructor re: .bind(this); magic.


  // NO. ES5: Works in part, but Trouble with "this"
  // Uncaught TypeError: Cannot read property 'setState' of undefined
  // onInputChange = function (event) {
    // (attr on input): onChange={this.onInputChange}

  // YEP. This ES5 function definition, when paired with an ES6 function invocation down on the input field, WORKS viz. "this"
  // onInputChange = function (event) {
    // (attr on input):         onChange={(event) => { this.onInputChange(event)}}



  // NO. ES5: As above, Works in part, but Trouble with "this"
  // Uncaught TypeError: Cannot read property 'setState' of undefined
  // onInputChange(event) {
    // (attr on input): onChange={this.onInputChange}

  // YEP. As above, This ES5 function definition, when paired with an ES6 function invocation down on the input field, WORKS viz. "this"
  // onInputChange(event) {
    // (attr on input):         onChange={(event) => { this.onInputChange(event)}}


  // WORKS. ES6: "this" now okay as used here:
    // (attr on input): onChange={this.onInputChange}
  // ALSO WORKS: with ES6 invocation: cheers.
    // (attr on input):         onChange={(event) => { this.onInputChange(event)}}
  onInputChange = ( event ) => {
    console.log("WR__ onInputChange - event.target.value: ", event.target.value);

    // Yes. Working. :o)
    // console.log("WR__ 01 src/containers/search_bar.js OPENWEATHER_API_KEY: ", OPENWEATHER_API_KEY);

    this.setState({ term: event.target.value});
  }


  /* N.B. The adding, down below, of this attribute ('value') to the input element (inside the render()), apparently turns this whole component into a "controlled" component.
  The input form field will then not allow any typing, no change.
  Why?
  I think it's because React has taken over the input field. It won't show a value till the full React cycle etc. provides the value.
  Whereas without the this 'value' attribute, the usual browser handling of the user input is what simply causes typed characters to appear within the input form.
  I think.
  //        value={this.state.term}
  */

  // onChange={this.onInputChange}
  // NO:   onChange={ () => { this.onInputChange()}
  // YES:        onChange={(event) => { this.onInputChange(event)}}


// plain old ES5. (no reference to "this" hmm.)
  onFormSubmit(event) {
    event.preventDefault();

    // we need to go FETCH WEATHER DATA...
    this.props.fetchWeather(this.state.term);
    // Clear the input field after search...
    this.setState({ term: '' });
  }


  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">

{/* WORKS: Entirely inline; no call out.
        onChange={(event) => {
              console.log("WR__ INLINE onChange - event.target.value: ", event.target.value);
          this.setState({term: event.target.value})
        }}
*/}
{/* WORKS: Inline, but Call out using ES6, handles "this" correctly: cool.
        onChange={(event) => { this.onInputChange(event)}}
*/}
        <input
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Drink Me</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// that null is because we have no mapStateToProps here.
export default connect(null, mapDispatchToProps)(SearchBar);
